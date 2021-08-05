import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MeasurementUnit, MeasurementUnitList } from '../../../enums/measurement-unit';
import { Product } from '../../../models/api/product';
import { ProductCategory } from '../../../models/api/product-category';
import { ProductOutput } from '../../../models/output/product.output';
import { AlertMessageService } from '../../../services/alert-message.service';
import { LoaderService } from '../../../services/loader.service';
import { ProductService } from '../../../services/product.service';
import { ToastService } from '../../../services/toast.service';

export interface ProductFormInputData {
  productId: number
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public isModal: boolean;

  public productId: number;
  public product: Product;

  public productForm: FormGroup;

  public categories: ProductCategory[] = [];
  public measurementUnits: string[] = MeasurementUnitList();

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _alert: AlertMessageService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: ProductFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params.productId || this.inputData.productId;

    this.isModal = !!this.inputData.productId;

    if (this.productId) {
      this.getProduct().then(() => {
        this.setFormValues();
      });
    }

    this.getCategories();
  }

  private initForm(): void {

    this.productForm = new FormGroup({
      category: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      measurementUnit: new FormControl(null, Validators.required),
      isGas: new FormControl(null)
    });
  }

  private setFormValues(): void {
    this.productForm.get('category').setValue(this.product.category.id);
    this.productForm.get('code').setValue(this.product.code);
    this.productForm.get('name').setValue(this.product.name);
    this.productForm.get('description').setValue(this.product.description);
    this.productForm.get('measurementUnit').setValue(this.product.measurementUnit);
    this.productForm.get('isGas').setValue(this.product.isGas);
  }

  private getCategories(): void {
    this._productService.getCategories().subscribe(response => {
      this.categories = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  private getProduct(productId: number = this.productId): Promise<Product> {

    return new Promise((resolve, reject) => {
      this._loader.show();
      this._productService.getById(productId).subscribe(response => {
        this._loader.dismiss();
        this.product = response;

        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
      });
    });
  }

  public save(): void {

    if (!this.productForm.valid) {
      this._toast.open('Preencha todos os campos obrigatórios', 'error');
      this.productForm.markAllAsTouched();
      throw new Error('Invalid form');
    }

    const productOutput: ProductOutput = {
      categoryId: this.productForm.get('category').value,
      code: this.productForm.get('code').value,
      name: this.productForm.get('name').value,
      description: this.productForm.get('description').value,
      measurementUnit: this.productForm.get('measurementUnit').value,
      isGas: this.productForm.get('isGas').value
    }

    let apiCall: Observable<Product>;

    if (this.product) {
      productOutput.id = this.product.id;
      apiCall = this._productService.update(productOutput);
    } else {
      apiCall = this._productService.create(productOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.product = response;

      this.initForm();
      this.setFormValues();

      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyBranch } from '../../../../models/api/company-brach';
import { ProductFilter } from '../../../../models/output/filters/product.filter';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { CompanyBranchService } from '../../../../services/company-branch.service';
import { LoaderService } from '../../../../services/loader.service';
import { ProductService } from '../../../../services/product.service';
import { ToastService } from '../../../../services/toast.service';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.scss']
})
export class PosProductsComponent implements OnInit {

  @ViewChild('companyBranch') public companyBranchElement: MatSelect;

  public productSearchAutocompleteOptions: AutocompleteOptions = {
    placeholder: 'Busca',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item)
  }

  public companyBranches: CompanyBranch[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    public salesPosService: SalesPosService,
    private _productService: ProductService,
    private _companyBranchService: CompanyBranchService
  ) { }

  ngOnInit(): void {
    this.getCompanyBranches();
  }

  private getCompanyBranches(): void {
    this._companyBranchService.getAll().subscribe(response => {
      this.companyBranches = response;
    }, error => {
      this._toast.showError(error);
    });
  }

  private productSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem[]> {

    const filter: ProductFilter = {
      index: 0,
      limit: 8,
      q: query
    };

    return this._productService.getAllForSales(filter, this.companyBranchElement.value).pipe(
      map(res => {
        return res.map(x => {
          return {
            label: `${x.product.code} - ${x.product.name}`,
            value: x
          } as AutocompleteItem
        });
      })
    )
  }

  private productSearchAutocompleteOnSelectItem(item: AutocompleteItem): void {
    console.log(item);
  }

}

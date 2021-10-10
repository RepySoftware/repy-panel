import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { DefaultDeliveryInstruction } from '../../../../models/api/default-delivery-instruction';
import { AddressOutput } from '../../../../models/output/address.output';
import { DeliveryInstructionOutput } from '../../../../models/output/delivery-instruction.output';
import { DeliveryInstructionService } from '../../../../services/delivery-instruction.service';
import { LoaderService } from '../../../../services/loader.service';
import { ToastService } from '../../../../services/toast.service';
import { AddressConfigService } from '../../../../shared/address-config/address-config.service';

export interface DeliveryInstructionFormInputData {
  index: number;
  employeeDriverId: number;
}

@Component({
  selector: 'app-delivery-instruction-form',
  templateUrl: './delivery-instruction-form.component.html',
  styleUrls: ['./delivery-instruction-form.component.scss']
})
export class DeliveryInstructionFormComponent implements OnInit {

  @ViewChild('deliveryInstruction') public deliveryInstructionElement: MatSelect;
  @ViewChild('description') public descriptionElement: ElementRef;
  @ViewChild('checkableByDriver') public checkableByDriverElement: MatSlideToggle;

  public readonly deliveryInstructionOtherValue = '#other';

  public defaultDeliveryInstructions: DefaultDeliveryInstruction[] = [];

  constructor(
    private _deliveryInstructionService: DeliveryInstructionService,
    private _toast: ToastService,
    private _loader: LoaderService,
    private _dialogRef: MatDialogRef<DeliveryInstructionFormComponent>,
    private _addressConfigService: AddressConfigService,
    @Inject(MAT_DIALOG_DATA) public inputData: DeliveryInstructionFormInputData
  ) { }

  ngOnInit(): void {
    this.getDeliveryInstructions();
  }

  private getDeliveryInstructions(): void {
    this._loader.show();
    this._deliveryInstructionService.getDefault().subscribe(response => {
      this._loader.dismiss();
      this.defaultDeliveryInstructions = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public cancel(): void {
    this._dialogRef.close();
  }

  public confirm(): void {

    const errors: string[] = [];

    if (!this.deliveryInstructionElement.value) {
      errors.push('Selecione uma instrução');
    } else if (
      this.deliveryInstructionElement.value == this.deliveryInstructionOtherValue
      && !this.descriptionElement.nativeElement.value
    ) {
      errors.push('Descrição obrigatória');
    }

    if (errors.length) {
      this._toast.open(errors.join(' | '), 'error');
      throw new Error(errors.join(' | '));
    }

    const description = this.deliveryInstructionElement.value != this.deliveryInstructionOtherValue ? this.deliveryInstructionElement.value : this.descriptionElement.nativeElement.value;

    const checkableByDriver: boolean = this.checkableByDriverElement.checked;

    const { employeeDriverId, index } = this.inputData;

    const output: DeliveryInstructionOutput = {
      employeeDriverId,
      index,
      description,
      address: this._addressConfigService.address as AddressOutput,
      checkableByDriver,
      firstPosition: this.inputData.index == 0
    }

    this._loader.show();
    this._deliveryInstructionService.create(output).subscribe(response => {
      this._loader.dismiss();
      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }
}

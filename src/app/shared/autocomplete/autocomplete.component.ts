import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AutocompleteOptions } from 'src/app/models/ui/autocomplete-options';
import { AutocompleteItem } from 'src/app/models/ui/autocomplete-item';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @ViewChild('autocompleteInput') public autocompleteInput: ElementRef;

  @Input() public options: AutocompleteOptions;
  @Input() public disabled: boolean = false;

  public items: AutocompleteItem[] = [];
  public onInputSubject: Subject<string> = new Subject();

  public selectedItem: AutocompleteItem;

  constructor() { }

  ngOnInit() {
    this.onInputSubject
      .pipe(
        debounceTime(300)
      )
      .subscribe(q =>
        this.options.onGetItems(q).subscribe(items => this.items = items)
      );
  }

  public onSelectItem(event: MatAutocompleteSelectedEvent): void {
    this.selectedItem = this.items.find(x => x.value == event.option.value)//this.items.splice()[0];
    this.autocompleteInput.nativeElement.value = this.selectedItem.label;
    this.options.onSelectItem(this.selectedItem);
  }

  public onBlur(): void {
    if (this.selectedItem)
      this.autocompleteInput.nativeElement.value = this.selectedItem.label;
    else
      this.autocompleteInput.nativeElement.value = null;
  }

  public onFocus(): void {
    this.autocompleteInput.nativeElement.value = null;
  }

  public clear(): void {
    this.items = [];
    this.autocompleteInput.nativeElement.value = null;
    this.selectedItem = null;
    this.options.onSelectItem({ value: null, label: null });
  }
}

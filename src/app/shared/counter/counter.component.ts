import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() public value: number = 0;
  @Output() public valueChanges: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public increaseValue(): void {
    this.value++;
    this.valueChanges.emit(this.value);
  }

  public decreaseValue(): void {
    this.value > 0 ? (this.value--) : (this.value = 0);
    this.valueChanges.emit(this.value);
  }
}
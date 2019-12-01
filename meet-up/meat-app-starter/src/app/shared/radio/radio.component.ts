import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  @Input() options: RadioOption[]

  value: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
  }

}

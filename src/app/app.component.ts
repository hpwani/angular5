import { element } from 'protractor';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'Angular5';
  title1: string;
  fruits: Array<string> = ['Apple', 'Mango', 'Banana', 'Chiku', 'Papaya', 'Apple', 'Mango', 'Banana', 'Chiku', 'Papaya', 'Apple', 'Mango', 'Banana', 'Chiku', 'Papaya', 'Apple', 'Mango', 'Banana', 'Chiku', 'Papaya', 'Apple', 'Mango', 'Banana', 'Chiku', 'Papaya'];
  selectedFruitValues = [];
  favFruitError: Boolean = true;

  nontrade = [
    { id: 1, label: 'A', selected: false },
    { id: 2, label: 'B', selected: false },
    { id: 3, label: 'C', selected: false },
    { id: 4, label: 'D', selected: false },
    { id: 5, label: 'E', selected: false }
  ];
  isNonTrade: boolean = false;
  checkAllNonTrades: boolean = false;

  nestedForm: FormGroup;

  constructor(private service: MyserviceService,
    private _fb: FormBuilder) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.title1 = this.service.display();

    this.nestedForm = this._fb.group({
      favFruits: this.addFruitsControls(),
    });
  }

  checkFruitControlsTouched() {
    let flg = false;
    this.fruitsArray.controls.forEach(control => {
      if (control.touched) {
        flg = true;
      }
    });
    return flg;
  }

  addFruitsControls() {
    const arr = this.fruits.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  get fruitsArray() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return <FormArray>this.nestedForm.get('favFruits');
  }

  getselectedFruitValues() {
    this.selectedFruitValues = [];
    this.fruitsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFruitValues.push(this.fruits[i]);
      }
    });
    console.log(this.selectedFruitValues);
    this.favFruitError = this.selectedFruitValues.length > 0 ? false : true;
  }

  allNonTrades(event) {
    const checked = event.target.checked;
    this.nontrade.forEach(item => item.selected = checked);
  }

  changeTradeByCategory(event) {
    if (event.target.name == 'nontrades') {
      this.isNonTrade = true;
    }
    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true;
    }
  }
}

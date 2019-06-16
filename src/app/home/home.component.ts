import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  FormGroup: FormGroup;
  form: any;
  frmGrp: FormGroup;
  TotalRow: number;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos: new FormArray([
        new FormControl('9978587452'),
        new FormControl('9874154578'),
      ]),
    });
    this.form.get('ContactNos').valueChanges.subscribe(
      contactNo => {
        console.log('Num Change: ' + contactNo);
      });

    this.frmGrp = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
      });
  }
  initItemRow(){
    return this._fb.group({
      Name: [''],
      RollNo: [''],
      Class: [''],
      MobileNo: ['']
    });
  }

  addNewRow(){
    const control = <FormArray>this.frmGrp.controls['itemRows'];
    control.push(this.initItemRow());
  }

  deleteRow(index: number){
    const control = <FormArray>this.frmGrp.controls['itemRows'];
    if(control != null){
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow > 1){
      control.removeAt(index);
    } else {
      alert('One Record is Mandatory..!');
      return false;
    }
  }

  submit() {
    console.log(this.frmGrp.get('itemRows').value);
  }

  reSet() {
    this.frmGrp.reset();
  }

addContactNo() {
  this.form.get('ContactNos').push(new FormControl());
  this.form.get('ContactNos').patchValue(['9975887568']);
}
onSubmit() {
  console.log(this.form.get('ContactNos').value);
  console.log(this.form.value);
}
setPreset() {
  // this.form.get('ContactNos').patchValue(['9978487564', '8785478967','']);
  this.form.reset();
}
fillData() {
  this.form.get('ContactNos').patchValue(['7788994878']);
}
}

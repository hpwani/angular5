import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  FormGroup: FormGroup;
  form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos: new FormArray([
        new FormControl('9978587452'),
        new FormControl('9874154578'),
      ]),
    });
  }
addContactNo() {
  this.form.get('ContactNos').push(new FormControl());
}
onSubmit() {
  console.log(this.form.get('ContactNos').value);
  console.log(this.form.value);
}
setPreset() {
  this.form.get('ContactNos').patchValue(['9978487564', '8785478967']);
}
}

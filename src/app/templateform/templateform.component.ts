import { NgForm } from '@angular/forms';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  num: string;
  // user = new User();
  constructor() { }

  // onFormSubmit(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   console.log("Username: " + form.controls['uname'].value);
  //   console.log("Gender: " + form.controls['gender'].value);
  //   console.log("married: " + form.controls['married'].value);
  //   console.log("T & C: " + form.controls['tc'].value);
  // }

  // resetForm(form: NgForm) {
  //   this.user = new User();
  //   form.resetForm({
  //     marride: false
  //   });
  // }

  // setDefaultValues() {
  //   this.user.username = "Hemant";
  //   this.user.gender = "male";
  //   this.user.ismarried = false;
  //   this.user.isTCAccepted = true;
  // }

  ngOnInit() {
  }
  Register(regForm: any) {
    this.fname = regForm.controls.firstname.value;
    this.lname = regForm.controls.lastname.value;
    this.email = regForm.controls.email.value;
    this.num = regForm.controls.number.value;
    console.log(this.fname+' '+this.lname+' '+this.email+' '+this.num);
  }

}

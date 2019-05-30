import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  signupform: FormGroup;
  FirstName: string="";
  LastName: string="";
  Email: string="";
  Password: string="";

  constructor(private frmbuilder: FormBuilder) {
    this.signupform = frmbuilder.group({
      fname: new FormControl(),
      lname: new FormControl(),
      emailid: new FormControl(),
      userpassword: new FormControl()
    });
   }

  ngOnInit() {
  }

  postData(signupform: any) {
    this.FirstName = signupform.controls.fname.value;
    console.log(this.FirstName);
  }

}

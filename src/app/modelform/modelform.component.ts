import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  signupform: FormGroup;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;

  constructor(private frmbuilder: FormBuilder) {
    // this.signupform = frmbuilder.group({
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   emailid: new FormControl(),
    //   userpassword: new FormControl()
    // });
   }

  ngOnInit() {
    this.signupform = this.frmbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailid: ['', Validators.compose([Validators.required, Validators.email])],
      userpassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  postData(signupform: any) {
    this.FirstName = signupform.controls.fname.value;
    this.LastName = signupform.controls.lname.value;
    console.log('First Name: ' + this.FirstName + ' ' + 'Last Name: ' + this.LastName);
  }

}

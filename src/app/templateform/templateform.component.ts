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
  constructor() { }

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

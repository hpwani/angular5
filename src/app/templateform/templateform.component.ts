import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Register(regForm: any) {
    var fname = regForm.controls.firstname.value;
    var lname = regForm.controls.lastname.value;
    var email = regForm.controls.email.value;
    console.log(fname+' '+lname+' '+email);
  }

}

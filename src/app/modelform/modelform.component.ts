import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { formsignup } from './formsignup';

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
  data: any;

  constructor(private frmbuilder: FormBuilder) {
    // this.signupform = frmbuilder.group({
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   emailid: new FormControl(),
    //   userpassword: new FormControl()
    // });
    this.signupform = this.frmbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailid: ['', Validators.compose([Validators.required, Validators.email])],
      userpassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
   }

  ngOnInit() {
    // this.signupform.get('fname').valueChanges.subscribe(
    //   uname => {
    //     console.log('fname chnaged: '+ uname);
    //   }
    // );

    // this.signupform.valueChanges.subscribe((userdata:formsignup)=>{
    //   console.log('fname chnaged: '+ userdata.fname);
    //   console.log('lname chnaged: '+ userdata.lname);
    //   console.log('emailID chnaged: '+ userdata.emailid);
    //   console.log('Password chnaged: '+ userdata.userpassword);
    // });

    // this.signupform.get('fname').statusChanges.subscribe(
    //     status => {
    //       console.log('fname status chnaged: '+ status);
    //     }
    //   );

    this.signupform.statusChanges.subscribe(
      status => {
        console.log('Form status chnaged: '+ status);
      }
    );
  }

  postData(signupform: any) {
    // this.FirstName = signupform.controls.fname.value;
    // this.LastName = signupform.controls.lname.value;
    this.FirstName = this.signupform.get('fname').value;
    this.LastName = this.signupform.get('lname').value;
    this.data = this.signupform.value;
    console.log('First Name: ' + this.FirstName + ' ' + 'Last Name: ' + this.LastName);
    console.log(this.data);
    console.log(this.signupform.value);
  }
  resetData(){
    this.signupform.reset({fname: 'Admin'});
  }
  filldata(){
    this.signupform.setValue({
      "fname":"Pranit",
      "lname":"Pande",
      "emailid":"kbc@gmail.com",
      "userpassword":"hjsyre123"
    });
  }
  fillvalue(){
    this.signupform.patchValue({
      "fname":"Pranit",
      "lname":"Pande",
      "userpassword":"hjsyre123"
    });
  }


}

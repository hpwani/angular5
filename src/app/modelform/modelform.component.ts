import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { formsignup } from './formsignup';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

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


  constructor(private frmbuilder: FormBuilder,
              private confirmationDialogService: ConfirmationDialogService) {
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
    //     console.log('fname changed: '+ uname);
    //   }
    // );

    // this.signupform.valueChanges.subscribe((userdata: formsignup) => {
    //   console.log('fname changed: '+ userdata.fname);
    //   console.log('lname changed: '+ userdata.lname);
    //   console.log('emailID changed: '+ userdata.emailid);
    //   console.log('Password changed: '+ userdata.userpassword);
    // });

    // this.signupform.get('fname').statusChanges.subscribe(
    //     status => {
    //       console.log('fname status changed: '+ status);
    //     }
    //   );

    /*----------whole form status---------*/
    // this.signupform.statusChanges.subscribe(
    //   status => {
    //     console.log('Form status changed: ' + status);
    //   }
    // );

    /*===========formArray===================== */
    const arr = new FormArray([
      new FormControl(),
      new FormControl()
    ]);
    arr.setValue(['Dipak','Kunal']);
    console.log('Set Value: ' + arr.value);
    arr.patchValue(['Ravi']);
    // alert('Processed...');
    console.log('Patch Value: '+ arr.value);
    console.log(arr.status);
    // alert('Reset...');
    arr.reset(['First Name', 'Last Name']);
    console.log(arr.value);
    console.log(arr.status);
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
  resetData() {
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
  fillvalue() {
    this.signupform.patchValue({
      "fname":"Pranit",
      "lname":"Pande",
      "userpassword":"hjsyre123"
    });
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}

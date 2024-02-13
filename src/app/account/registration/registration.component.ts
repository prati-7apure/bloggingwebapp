import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';
// import {FormControl } from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage: string = '';
  // massage: string;
  
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) {  
    this.regForm = this.formbuilder.group({
    // form controls go here
  }); }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
       Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.regForm.value;
//console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.regForm.reset();
      }
    )
  }
}
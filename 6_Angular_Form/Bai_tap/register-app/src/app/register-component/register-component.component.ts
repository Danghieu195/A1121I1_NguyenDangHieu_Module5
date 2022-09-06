import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  countries : string[] =  ['VietNam','China','USA','Japan','Korea','Germany'];

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),

      groupPassword: new FormGroup({

        password: new FormControl('',
          [Validators.required,Validators.minLength(6)]),

        confirmPassword: new FormControl('',
          [Validators.required,Validators.minLength(6)])

      }, this.checkPassword),

      country: new FormControl('',
        [Validators.required]),

      age: new FormControl('',
        [Validators.required,Validators.min(18)]),

      gender: new FormControl('',
        [Validators.required]),

      phone: new FormControl('',
        [Validators.required,Validators.pattern("^\\+84\\d{9,10}$")])

    })
  }

  ngOnInit(): void {


  }

  checkPassword(abstractControl: AbstractControl): any {
    const password = abstractControl.value.password;
    const confirmPassword = abstractControl.value.confirmPassword;

    return password === confirmPassword ? null : {notConfirm: true};
  }
}

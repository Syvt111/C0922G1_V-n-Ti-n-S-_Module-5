import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')],
      password: ['', Validators.minLength(6), Validators.required],
      confirm_password: ['', Validators.required],
      country: ['', Validators.required],
      age: ['', Validators.required, Validators.min(18)],
      gender: ['', Validators.required],
      phone: ['', Validators.required, Validators.pattern('^\\+84\\d{9,10}$')],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}

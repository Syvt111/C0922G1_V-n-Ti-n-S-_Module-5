import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^([\\p{L}\\s])+$')]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{11}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}|\\(84\\)\\+90\\d{7})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    delete: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  constructor(private customerService:CustomerService,
              private router: Router) { }

  ngOnInit(): void {

  }

  create() {
    const customer = this.customerForm.value;
    this.customerService.save(customer);
    this.router.navigateByUrl('/product/list');
  }
}


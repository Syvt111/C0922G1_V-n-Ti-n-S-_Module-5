import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer/customer";
import {CustomerService} from "../../service/customer-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  updateCustomer: Customer;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      console.log(id);
      this.updateCustomer = this.customerService.findById(id);
    });
    this.customerForm = new FormGroup({
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
  }

  update() {
    const customer = this.customerForm.value;
    this.customerService.updateById(customer);
    this.router.navigateByUrl('/product/list');
  }
}

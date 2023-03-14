import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContractService} from "../../service/contract-service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup  = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.min(0)]),
    customerTypes: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
  });

  constructor(private contractService:ContractService,
              private router: Router) { }

  ngOnInit(): void {

  }

  create() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.router.navigateByUrl('/product/list');
  }
}

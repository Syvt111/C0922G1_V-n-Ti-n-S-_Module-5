import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer-service";
import {ActivatedRoute, Router} from "@angular/router";
import {ContractService} from "../../service/contract-service";
import {Contract} from "../../model/contract/contract";

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  contractForm: FormGroup;
  updateContract: Contract;

  constructor(private contractService: ContractService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      console.log(id);
      this.updateContract = this.contractService.findById(id);
    });
    this.contractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      customerTypes: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    });
  }

  update() {
    const contract = this.contractForm.value;
    this.contractService.updateById(contract);
    this.router.navigateByUrl('/product/list');
  }
}

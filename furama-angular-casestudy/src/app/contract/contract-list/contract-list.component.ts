import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract/contract";
import {ContractService} from "../../service/contract-service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
 contract: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.contract = this.contractService.getAll();
  }
}

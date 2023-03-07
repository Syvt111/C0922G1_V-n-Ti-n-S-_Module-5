import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }


  addition(number1: string, number2: string) {
    this.result = parseInt(number1) + parseInt(number2);
  }

  subtraction(number1: string, number2: string) {
    this.result = parseInt(number1) - parseInt(number2);
  }

  multiplication(number1: string, number2: string) {
    this.result = parseInt(number1) * parseInt(number2);
  }

  division(number1: string, number2: string) {
    this.result = parseInt(number1) / parseInt(number2);
  }
}

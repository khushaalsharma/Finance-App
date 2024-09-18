import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InvestData } from './investData.module';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {  

  initialInvestment = 0;
  annualInvestment = 0;
  expectedRate = 5;
  duration = 10;

  @Output() calculate = new EventEmitter<InvestData>();

  OnSubmit(){
    this.calculate.emit({
      initialInvestment : this.initialInvestment,
      annualInvestment : this.annualInvestment,
      expectedReturn : this.expectedRate,
      duration: this.duration
    });
  }
}

import { Component, Input } from '@angular/core';
import { InvestmentResults } from './investment-results.module';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) results !: InvestmentResults[];
}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'child1-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private protfolio: PortfolioService) { }

  ngOnInit(): void {
    this.protfolio.projects$.subscribe(console.log)
  }

}

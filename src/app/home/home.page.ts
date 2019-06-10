import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*public cnumberRE:number = 0.0128088;
  public cnumberER:number = 78.0739;*/


  public typeConversion:any;

  public lakhtype:any;
  public Laks:any;

  public Euro: number;
  public Rupia: number;
  public resultRate: number;

  public RupiaResult: number;
  public EuroResult: number;
  public currency: any;

  constructor(
    public currencyService : CurrencyService
  ) {
  }
  convertype(){
    this.typeConversion = !this.typeConversion;
  }
  lakhtypec(){
    this.lakhtype = !this.lakhtype;
  }
  calculateCurrencyOne() {
    this.RupiaResult = (this.Euro * 10) * this.currencyService.cnumberER;
  }
  calculateCurrencyTwo() {
    this.EuroResult = (this.Rupia * 10) * this.currencyService.cnumberRE;
  }
}

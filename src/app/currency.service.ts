import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public dataEUR:any;
  public dataINR:any;

  public cnumberRE:any;
  public cnumberER:any;

  constructor(private http: HttpClient) {
    this.getCurrencyEuroToRupie();
    this.getCurrencyRupieToEuro();

  }
  getCurrencyEuroToRupie() {
    return this.http.get('https://api.exchangeratesapi.io/latest').subscribe(
      (data) => { // Success
        console.log(data);
        if(data){
          this.dataEUR = data;
          this.cnumberER = this.dataEUR.rates.INR * 0.1;

        }
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  getCurrencyRupieToEuro() {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=INR').subscribe(
      (data) => { // Success
        console.log(data);
        if(data){
          this.dataINR = data;
          this.cnumberRE = this.dataINR.rates.EUR;

        }
      },
      (error) =>{
        console.error(error);
      }
    );
  }
}

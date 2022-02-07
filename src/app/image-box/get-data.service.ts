import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  
   getRabbis() {
       return [
           {
               name: "Ben Ish Chai",
               location: "Baghdad"
           },
           {
               name: "Rashash",
               location: "Yemen"
           },
           {
               name: "Marhu",
               location: "Tzefat"
           }
       ]
   }
}

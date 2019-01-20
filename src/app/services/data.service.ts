import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

  
  constructor(
    private http : Http
  ) { }

  getData(){
     return this.http.get('../../assets/data.json')
    .map(
      res => res.json()
    )
    
  }
}

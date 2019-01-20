import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers : [DataService]

})
export class FormComponent implements OnInit {
  datalist : any;
  constructor(private dataservice : DataService) { }

  signup(){
   this.dataservice.getData().subscribe(data => this.datalist = (data))

  }
  
  shortData(shortBy){
    if(shortBy==="first_name"){
      this.datalist.sort((a , b)=>{
        
        return a.addres.localeCompare(b.addres);
      })

      console.log(this.datalist);
    }
  }

  ngOnInit() {
   
      this.signup();
  }

}


import { Iproperty } from '../../ipropertys.interface';
import { HousingService } from './../../../services/housing.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
 
  properties!: Array<Iproperty>;
  constructor(private housingService:HousingService){}
  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
       data=>{
      this.properties = data;
      console.log(data);
    },error =>{
      console.log('httperror:');
      console.log(error)
    }
  );

    

  }
    

}

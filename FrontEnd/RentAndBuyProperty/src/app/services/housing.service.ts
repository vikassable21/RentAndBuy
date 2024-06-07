import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

import { Iproperty } from '../property/ipropertys.interface';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
userData:any;
  getAllProperties():Observable<Iproperty[]>{
    return  this.http.get('data/properties.json').pipe(
      map(data=>{
        this.userData=data
        let propertiesArray:any=[];
        propertiesArray=this.userData;

        console.log(propertiesArray);
        console.log(data.valueOf.length);
        // for(let id in data){
        //   if(data.hasOwnProperty(id)){
          //propertiesArray.push(data['id']);
          // }
        // }
        return propertiesArray;
      })
    
    );
  }
}

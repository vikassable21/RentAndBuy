import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {



onBack() {
this.router.navigate(['/']);
}
  public propertyId!: number;
  constructor(private route:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    //property-detail by button on image in home
this.propertyId=+(this.route.snapshot.params['id']);

this.route.params.subscribe(
  (params)=> {
    this.propertyId= + params['id']
  }
);
  }

  onSelectNext() {
this.propertyId++;
this.router.navigate(['property-detail',this.propertyId])

    }

    onSelectPrevious() {
      if(this.propertyId>0){
        this.propertyId--;
        this.router.navigate(['property-detail',this.propertyId])
      }
   
      }

}

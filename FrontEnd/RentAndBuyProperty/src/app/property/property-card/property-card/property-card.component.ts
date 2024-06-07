import { Component, Input, input } from "@angular/core";

import { Iproperty } from "../../ipropertys.interface";



@Component({
    selector:'app-property-card',
    // template:'<h1>I Am Card</h1>',
    templateUrl:'property-card.component.html',
    // styles:['h1{font-weight:normal;}']
    styleUrls: ['./property-card.component.css'],
})

export class PropertyCardComponent{
    @Input()
    property!: Iproperty;
    // Property:any ={
    //     "Id":1,
    //     "Name":"Birla House",
    //     "Type":"House",
    //     "Price":1400000

    // }
}
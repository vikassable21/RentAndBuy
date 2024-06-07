import { Iproperty } from './property/ipropertys.interface';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

import { Routes,RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

const appRoutes :Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
   {path:'add-property',component:AddPropertyComponent},
   {path:'property-detail/:id',component:PropertyDetailsComponent},
   {path:'**',component:PropertyListComponent}
]

// import { PropertyListComponent } from './property/property-list/property-list.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { PropertyCardComponent } from './property/property-card/property-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
NavBarComponent,
AddPropertyComponent,
PropertyDetailsComponent




  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService


  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

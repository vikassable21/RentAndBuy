import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

// import { PropertyListComponent } from './property/property-list/property-list.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { PropertyCardComponent } from './property/property-card/property-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
NavBarComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { ProperyCardComponent } from './property/property-card/propery-card/propery-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProperyCardComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

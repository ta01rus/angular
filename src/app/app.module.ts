import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { AppComponent } from './application/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './leftmenu/leftmenu.component';
import { RouteModule } from './RouteModule.module';
import { ItemsComponent } from './items/items.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, ItemsComponent, ItemComponent,  NavbarComponent, FooterComponent, LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _route: Router) {}

 }

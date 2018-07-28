import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './application/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './leftmenu/leftmenu.component';
import { DesktopComponent } from './desktop/desktop.component';
import { RouteModule } from './RouteModule.module';

@NgModule({
  declarations: [
    AppComponent,  NavbarComponent, FooterComponent, LeftMenuComponent, DesktopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

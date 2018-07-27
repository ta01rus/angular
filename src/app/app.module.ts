import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './application/app.component';
import { GkxNavBar } from "./navbar/navbar.component";
import { GkxFooter } from "./footer/footer.component";
import { GkxLeftMenu } from "./left_menu/left_menu.component";
import { GkxDesktop } from "./desktop/desktop.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, GkxNavBar, GkxFooter, GkxLeftMenu, GkxDesktop
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

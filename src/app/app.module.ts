import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



// @NgModule: decorator funtion on AppModule class, makes it acts as Module...
@NgModule({
  declarations: [
    // any components added in this module....
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    // any used angular-modules in this module, AppModule...
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  // for services....
  bootstrap: [AppComponent] // starter component for this module...
})
export class AppModule { }

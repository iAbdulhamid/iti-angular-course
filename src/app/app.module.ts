import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdectListComponent } from './components/order/prodect-list/prodect-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './directives/light-box.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';



// @NgModule: decorator funtion on AppModule class, makes it acts as Module...
@NgModule({
  declarations: [
    // any components added in this module....
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ProdectListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    LifecycleHooksComponent,
  ],
  imports: [
    // any used angular-modules in this module, AppModule...
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  // for services....
  bootstrap: [AppComponent] // starter component for this module...
})
export class AppModule { }

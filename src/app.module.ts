import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/components/component/app.component';
import { CentroComponent } from './app/components/centro/centro.component';
import { AppRoutingModule } from './app/routing/app-routing.module';
import { NavbarComponent } from './app/components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    CentroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }

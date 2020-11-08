import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCamisetasComponent } from './lista-camisetas/lista-camisetas.component';

import { FormsModule } from '@angular/forms';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { CamisetasAboutComponent } from './camisetas-about/camisetas-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CamisetasContactoComponent } from './camisetas-contacto/camisetas-contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaCamisetasComponent,
    CamisetasComponent,
    CarroComprasComponent,
    CamisetasAboutComponent,
    InputIntegerComponent,
    CamisetasContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

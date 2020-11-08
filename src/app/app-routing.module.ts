import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CamisetasAboutComponent } from './camisetas-about/camisetas-about.component';
import { CamisetasContactoComponent } from './camisetas-contacto/camisetas-contacto.component';

const routes: Routes = [
  {
    path: '',
    component: CamisetasComponent,
    pathMatch: 'full'
  },
  {
    path: 'camisetas',
    component: CamisetasComponent
  },
  {
    path: 'contacto',
    component: CamisetasContactoComponent
  },
  {
    path: 'about',
    component: CamisetasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentroComponent } from '../components/centro/centro.component';

const routes: Routes = [
  {
  path: '/centros',
  component: CentroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CentroComponent]
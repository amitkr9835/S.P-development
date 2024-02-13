import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () =>
  import("./modules/home/home.module").then (
    (m) => m.homemodule),
     },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'enabled'})
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }

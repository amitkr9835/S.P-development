import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () =>
  import("./modules/home/home.module").then (
    (m) => m.homemodule),
     },
     { path: 'about',
    loadChildren: () =>
  import("./modules/about/about.module").then (
    (m) => m.aboutmodule),
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

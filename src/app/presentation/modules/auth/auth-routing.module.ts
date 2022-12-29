import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'login', loadChildren:()=>import('./login').then(m=>m.LoginModule)},
  {path:'register',loadChildren:()=>import('./register').then(m=>m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

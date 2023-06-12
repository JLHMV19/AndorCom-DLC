import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  { path: 'login', component : LoginPageComponent },
  { path: 'start', component : StartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

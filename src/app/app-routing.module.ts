import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [

  {
    path: 'view.htm',
    component: ViewComponent
  },
  {
    path: 'welcome.htm',
    component: AppComponent
  },
  {
    path: 'registration.htm',
    component: RegistrationComponent
  },

  {
    path: 'registration.htm/:id',
    component: RegistrationComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

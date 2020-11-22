import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DashComponent } from './components/dash/dash.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GardService } from './services/gard.service';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent,canActivate:[GardService]},
  {path:'dash', component:DashComponent,canActivate:[GardService]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'**',      component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

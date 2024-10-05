import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartlistComponent } from './cartlist/cartlist.component';

const routes: Routes = [
{path:'signin',component:SigninComponent},
{path:'signout',component:SignoutComponent},
{path:'food',component:FoodComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'cartlist',component:CartlistComponent},
{path:'**',component:FoodComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GitDetailsComponent } from './gitdetails/gitdetails.component';
import { GitformComponent } from './gitform/gitform.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'gitdetails', component: GitDetailsComponent},
  {path: 'gitform', component: GitformComponent},
  {path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

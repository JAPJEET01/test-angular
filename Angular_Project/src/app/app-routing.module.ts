import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddCategroyComponent } from './category/add-categroy/add-categroy.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'',redirectTo:'/layout/home',pathMatch:'full'},
  {path:"layout" , component:LayoutComponent , 
  children:[
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"contact-form",component:ContactFormComponent},
  {path:"internship",component:AddCategroyComponent},
  {path:"projects",component:ProjectsComponent},
]

}
  // {path:"Home",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularjavascriptComponent } from './angularjavascript/angularjavascript.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LogoComponent } from './logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  {path:"logo",component:LogoComponent},
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
   {path:"technologies",component:TechnologiesComponent,children:[
    {path:"javascript",component:JavascriptComponent },
  {path:"typescript",component:TypescriptComponent},
  {path:"angularjavascript",component:AngularjavascriptComponent},
]},
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

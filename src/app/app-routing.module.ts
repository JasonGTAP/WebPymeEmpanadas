import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [

  {path:"", redirectTo:"Principal",pathMatch:"full"}, // 
  
  
  //creando rutas
  {path:"Principal",component:PrincipalComponent} 
  
  
  
  
  
  
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

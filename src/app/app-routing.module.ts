import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployesComponent} from "./components/employes/employes.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {HomeComponent} from "./components/home/home.component";
import {NewemployeComponent} from "./components/newemploye/newemploye.component";
import {EditemployeComponent} from "./components/editemploye/editemploye.component";

const routes: Routes = [
  {path: 'employes', component: EmployesComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: '', component:HomeComponent},
  {path: "newEmploye", component: NewemployeComponent},
  {path: "editEmploye/:idemploye", component:EditemployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

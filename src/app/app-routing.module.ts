import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { authGuard, reGuard } from './route-guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[reGuard]},
  {path:'create-user',component:CreateuserComponent},
  {path:'dash',component:LayoutComponent,canActivate:[authGuard],children:[
    {path:'userlist',component:UserlistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

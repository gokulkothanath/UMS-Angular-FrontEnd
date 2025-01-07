import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as userActions from 'src/app/states/user/user.actions'
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserError, selectUserLoad,selectUserToken } from 'src/app/states/user/user.selectors';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 fb:FormBuilder=inject(FormBuilder)
  flag:boolean=false;
  router=inject(Router)  
  store=inject(Store)
  loginObj:any={
    UserName:String,
    passWord:String
  }
  userService=inject(UserService)
 loginForm=this.fb.group({
   UserName:['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z0-9]+')]],
   passWord:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
 })
 prop:boolean=true
 error$:Observable<String|null>=this.store.select((state)=> state.User.error)
 loading$:Observable<boolean>=this.store.select((state)=>state.User.loading)
 //token$:Observable<object|null>=this.store.select(selectUserToken)
 constructor(){
  this.store.select((state)=>state.User.token).subscribe((token)=>{
    if(token){ 
      localStorage.setItem('token',token)
      this.router.navigateByUrl("dash")
    }
  })
 }

 str:string='this is your review date'
 get f(){
  return this.loginForm.controls
 }
 get err(){
  return this.loginForm.invalid
 }
 onSubmit(){
  this.flag=true;
  this.loginObj.UserName=this.f.UserName.value;
  this.loginObj.passWord=this.f.passWord.value;
       if(this.err==false){
            this.store.dispatch(userActions.login({UserName:this.loginObj.UserName,passWord:this.loginObj.passWord}))
            console.log(this.error$);
            
         }
 }
}

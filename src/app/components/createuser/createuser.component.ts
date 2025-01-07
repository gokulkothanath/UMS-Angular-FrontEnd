import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userActions from "src/app/states/user/user.actions"
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  store=inject(Store)
  fb=inject(FormBuilder);
  flag:boolean=false;
  UserName:any=null;
  passWord:string|any=''
  place:string|any=''
  signUpform=this.fb.group({
    UserName:['',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]],
    passWord:['',[Validators.required,Validators.pattern('[A-Za-z0-9]{3,}')]],
    place:['',[Validators.required,Validators.pattern('[a-zA-Z]{4,}')]]
  })
  message$:Observable<String|null>=this.store.select((state)=>state.SignUp.message)
  error$:Observable<String|null>=this.store.select((state)=>state.SignUp.error)
  signingUp$:Observable<boolean>=this.store.select((state)=>state.SignUp.signingUp)
  get f(){
    return this.signUpform.controls
  }
  get err(){
    return this.signUpform.invalid
  }
  onSubmit(){
   this.flag=true
   this.UserName=this.f.UserName.value;
   this.passWord=this.f.passWord.value;
   this.place=this.f.place.value;
   if(this.err==false){
    this.store.dispatch(userActions.signUp({UserName:this.UserName,passWord:this.passWord,place:this.place}))   
  }
  }
  
}

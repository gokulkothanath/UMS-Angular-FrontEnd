import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  http=inject(HttpClient)
  onLogin(UserName:string,passWord:string):Observable<any>{
    return this.http.post('http://localhost:3000/login',{UserName,passWord})
  }
  onSignUp(UserName:string,passWord:string,place:string):Observable<any>{
    return this.http.post('http://localhost:3000/user',{UserName,passWord,place})
  }
  userList(){
    const token=localStorage.getItem('token')
    return this.http.get('http://localhost:3000/user',{headers:{Authorization:`${token}`}})
  }
}

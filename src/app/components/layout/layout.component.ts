import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit  {
store=inject(Store)
router=inject(Router)
token$:Observable<string>=this.store.select((state)=>state.User.token);
name$:Observable<string>=this.store.select((state)=>state.User.name);
place$:Observable<string>=this.store.select((state)=>state.User.place)
ngOnInit(): void {  
  
}

onLogout(){
  localStorage.clear()
  this.router.navigate(['/login'])
}
getUsers(){
  this.router.navigate(['/dash/userlist'])
}
}

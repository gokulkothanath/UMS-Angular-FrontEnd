import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userService=inject(UserService)
  data:any=new Observable<any>()
ngOnInit(): void {
  this.userService.userList().subscribe((res:any)=>{
    this.data=res
  })
}
}

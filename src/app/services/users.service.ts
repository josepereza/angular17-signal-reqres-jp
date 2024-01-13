import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiResponse, User } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
urlApi='https://reqres.in/api/users'
users=signal<User[]>([])
http=inject(HttpClient)

  constructor() {
    
    this.http.get<ApiResponse>(`${this.urlApi}`)
    .pipe(map((res)=>res.data)).subscribe(res=>{
      this.users.set(res)
    })

   }
}

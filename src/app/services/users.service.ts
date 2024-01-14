import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiResponse, User, UserResponse } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
   getUser(id:number):Observable<User>{
    return this.http.get<UserResponse>(`${this.urlApi}/${id}`)
    .pipe(map((res)=>res.data))
   }
}

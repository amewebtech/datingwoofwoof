import { User } from './../app/_models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { ReplaySubject } from 'rxjs';

//this service can be injectded in to other services or components
//agular service is singleston, stays alive until the app is closed
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }
  
  login(model: User){
    //Arguments - url, body of post
    return this.http.post<User>(this.baseUrl + 'account/login', model)
      .pipe(
        map((response: User) => 
            {
              let user = response;
                if(user){
                  localStorage.setItem('user', JSON.stringify(user));
                  this.currentUserSource.next(user);
                }

                
            return user;
            }
          ) 
      )
  }

  register(model: User){
    
    return this.http.post<User>(this.baseUrl + 'account/register', model)
    .pipe(
      map((a: User) => {
          if (a) {
            localStorage.setItem('user', JSON.stringify(a));
            this.currentUserSource.next(a);
          }
        })
      )
        
    
  }
  setCUrrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logOut(){
    this.currentUserSource.next(null);
    localStorage.removeItem('user');
  }
}

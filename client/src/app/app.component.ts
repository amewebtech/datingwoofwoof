import { AccountService } from './../_services/account.service';
import { User } from './_models/User';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'I am a dating app!';
  users: any;

  constructor(private accountService: AccountService){

  }

  ngOnInit() {
    this.setCurrentUser();
  }


  setCurrentUser(){

    const user: User = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCUrrentUser(user);
  }




}

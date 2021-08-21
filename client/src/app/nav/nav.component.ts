import { AccountService } from './../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { User } from '../_models/User';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public AccountService: AccountService) {


  }

  ngOnInit(): void {
  }

  login(){
    this.AccountService.login(this.model).subscribe(response =>{
      console.log(response);
    },
    error => {
      console.log(error);
    }
    );
  }

  logout(){
    this.AccountService.logOut();

  }




}

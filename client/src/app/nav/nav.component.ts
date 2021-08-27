import { Router } from '@angular/router';
import { AccountService } from './../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public AccountService: AccountService
    , private router: Router
    , private toastr: ToastrService) {


  }

  ngOnInit(): void {
  }

  login(){
    this.AccountService.login(this.model).subscribe(response =>{
      this.router.navigateByUrl('/members');
      console.log(response);

    },
    error => {
      console.log(error);
    }
    );
  }

  logout(){
    this.AccountService.logOut();
    this.router.navigateByUrl('/');
  }




}

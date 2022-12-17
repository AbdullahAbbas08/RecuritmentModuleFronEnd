import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Roles } from '../../Constants/roles';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn:boolean =this.auth.isApplicantAuthenticated() || this.auth.isAdminAuthenticated();

  constructor(private auth:AuthService,private router:Router) {

  }

  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem("auth");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    this.router.navigateByUrl("/auth/login");
  }

}

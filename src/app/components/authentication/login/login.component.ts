import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { SharedMethodsService } from '../../../shared/services/shared-methods.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  helper = new JwtHelperService();

  constructor(
    private _formBuilder: FormBuilder,
    private API: AuthService,
    private SharedMethods: SharedMethodsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm() {
    this.LoginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Login() {
    this.API.Login(this.LoginForm.value).subscribe((res) => {
      localStorage.setItem('auth', res.data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.router.navigateByUrl("/vacancy/show");
    });
  }
}

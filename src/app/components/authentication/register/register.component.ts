import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../../shared/services/auth.service';
import { SharedMethodsService } from '../../../shared/services/shared-methods.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Register() {
    this.API.Register(this.LoginForm.value).subscribe((res) => {
      localStorage.setItem('auth', res.data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.router.navigateByUrl("/vacancy/show");
    });
  }
}

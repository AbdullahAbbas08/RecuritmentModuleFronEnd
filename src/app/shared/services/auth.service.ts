import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericResponse } from '../models/generic-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Roles } from '../Constants/roles';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();
   toaken:string = localStorage.getItem("auth") || "";

  constructor(private http:HttpClient) { }

  Login(Data:any): Observable<GenericResponse<string>> {
    return this.http.post<GenericResponse<string>>(`${environment.Server_URL}/Authentication`,Data);
  }

  Register(Data:any): Observable<GenericResponse<string>> {
    return this.http.post<GenericResponse<string>>(`${environment.Server_URL}/User`,Data);
  }

  CheckLogin(): Observable<GenericResponse<any>> {
    return this.http.get<GenericResponse<any>>(`${environment.Server_URL}/Authentication/CheckLolin`);
  }

  isApplicantAuthenticated():boolean{
    let flag = false;
    try{
      flag = this.helper.decodeToken(this.toaken)["Role"] == Roles.Applicant;
    }catch{
      flag = false
    }
    return flag;
  }

  getUserId():string{
    let flag = null;
    try{
      flag = this.helper.decodeToken(this.toaken)["UserId"] ;
    }catch{
      flag = null;
    }
    return flag;
  }

  isAdminAuthenticated():boolean{
    let flag = false;
    try{
      flag = this.helper.decodeToken(this.toaken)["Role"] == Roles.Admin;
    }catch{
      flag = false
    }
    return flag;
  }

}

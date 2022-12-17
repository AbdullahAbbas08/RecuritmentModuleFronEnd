import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericResponse } from '../models/generic-response';
import { Vacancy } from '../models/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  GetVacancies(): Observable<GenericResponse<Vacancy[]>> {
    return this.http.get<GenericResponse<Vacancy[]>>(`${environment.Server_URL}/Vacancy`);
  }

  FindVacancies(id:number): Observable<GenericResponse<Vacancy[]>> {
    return this.http.get<GenericResponse<Vacancy[]>>(`${environment.Server_URL}/Vacancy?id=${id}`);
  }

  GetVacanciesPaging(PageNumber:number,PageSize:number): Observable<GenericResponse<Vacancy[]>> {
    return this.http.get<GenericResponse<Vacancy[]>>(`${environment.Server_URL}/Vacancy/GetVacanciesPaging?PageNumber=${PageNumber}&PageSize=${PageSize}`);
  }

  GetJobCategory(): Observable<GenericResponse<any[]>> {
    return this.http.get<GenericResponse<any[]>>(`${environment.Server_URL}/JobCategory`);
  }

  CreateVacancy(Data:any): Observable<any> {
    return this.http.post<any>(`${environment.Server_URL}/Vacancy`,Data);
  }

  ApplyApplicant(Data:any): Observable<GenericResponse<string>> {
    return this.http.post<GenericResponse<string>>(`${environment.Server_URL}/Vacancy/ApplyApplicant`,Data);
  }

  Delete(id:number): Observable<any> {
    return this.http.post<any>(`${environment.Server_URL}/Vacancy/${id}`,null);
  }
}

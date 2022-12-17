import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { GenericResponse } from '../shared/models/generic-response';
import { Vacancy } from '../shared/models/Vacancy';
import { APIService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetVacanciesResolver implements Resolve<GenericResponse<Vacancy[]>> {
  constructor(private API:APIService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GenericResponse<Vacancy[]>> {
    return this.API.GetVacancies().pipe(map(vacancy=>vacancy));
  }
}

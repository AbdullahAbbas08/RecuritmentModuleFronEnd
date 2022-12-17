import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedMethodsService {

  constructor() { }

  ErrorMessage(msg:string){
    Swal.fire({
      icon: 'error',
      title: 'Error ...',
      text: msg,
    })
  }

  SuccessSwal(msg:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
}

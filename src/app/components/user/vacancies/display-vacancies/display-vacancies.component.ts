import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { APIService } from '../../../../shared/services/api.service';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-display-vacancies',
  templateUrl: './display-vacancies.component.html',
  styleUrls: ['./display-vacancies.component.css']
})
export class DisplayVacanciesComponent implements OnInit {

  //#region Initail Section
  Vacancies:any[]=[];
  p: number = 1;
  total: number = 0;
  IsAdmin:boolean =this.auth.isAdminAuthenticated();

  //#endregion
  constructor(private API:APIService,private route:ActivatedRoute,private auth:AuthService) { }

  ngOnInit(): void {
    this.Vacancies = this.route.snapshot.data["vacancy"].data;

    // this.GetVacancies(1);
  }

  GetVacancies(n:number) {
    this.API.GetVacanciesPaging(n,3).subscribe(
      response => {
        this.Vacancies = response.data
      }
    )
  }

  ApplyApplicant(Id:number) {
    this.API.ApplyApplicant({
      "applicantId": this.auth.getUserId(),
      "vacancyId": Id
    }).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.GetVacancies(this.p);
}

Delete(id: number) {
  Swal.fire({
    title: ' Alarm !',
    text: "Do You Really Delete This Item ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#F00',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
  })
    .then((result) => {

      if (result.isConfirmed) {
        this.API.Delete(id).subscribe(
          response => {
            console.log(response);

            this.API.GetVacancies();
            Swal.fire({
              icon: 'success',
              title: "Operation Success",
              showConfirmButton: false,
              timer: 1500
            })
          }
        )

      } else {
        // Swal.fire(
        //   'Your appointment still active ',
        // );
      }
    });
}


}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { APIService } from '../../../../shared/services/api.service';
import { SharedMethodsService } from '../../../../shared/services/shared-methods.service';

@Component({
  selector: 'app-insert-vacancy',
  templateUrl: './insert-vacancy.component.html',
  styleUrls: ['./insert-vacancy.component.css'],
})
export class InsertVacancyComponent implements OnInit {
  //#region  /*========== Init Section ==========*/
  VacancyForm: FormGroup;
  Categories: any[] = [];
  //#endregion
  constructor(
    private fb: FormBuilder,
    private API: APIService,
    private route: ActivatedRoute,
    private SharedMethods: SharedMethodsService,
    private router:Router
  ) {
    this.VacancyForm = this.createFormItem('init');
  }

  ngOnInit(): void {
    this.GetJobCategory();
    // if (this.route.snapshot.paramMap.get('id')) {
    //   this.GetVacancies(this.route.snapshot.paramMap.get('id'));
    // }
  }

  // GetVacancies(n: any) {
  //   this.API.FindVacancies(n).subscribe((response) => {
  //     for (let index = 0; index < response.data[0].responsibilities.length; index++) {
  //       this.addResponsibility()
  //     }
  //     for (let index = 0; index < response.data[0].skills.length; index++) {
  //       this.addSkill()
  //     }
  //     console.log(response.data[0]);
  //     this.VacancyForm.patchValue(response.data[0]);
  //   });
  // }

  GetJobCategory() {
    this.API.GetJobCategory().subscribe((response) => {
      this.Categories = response.data;
    });
  }

  /*========== Get Class Rooms ==========*/
  getResponsibilities(): FormArray {
    return this.VacancyForm.get('responsibilities') as FormArray;
  }

  /*========== Add Class Rooms ==========*/
  addResponsibility() {
    this.getResponsibilities().push(this.createFormItem('Responsibility'));
  }

  deleteResponsibility(Index: number) {
    this.getResponsibilities().removeAt(Index);
  }

  getSkills(): FormArray {
    return this.VacancyForm.get('skills') as FormArray;
  }

  addSkill() {
    this.getSkills().push(this.createFormItem('Skill'));
  }
  /*========== Delete Class Rooms ==========*/

  deleteSkill(Index: number) {
    this.getSkills().removeAt(Index);
  }

  createFormItem(itemType: string): FormGroup {
    let formItem = this.fb.group({});
    switch (itemType) {
      case 'init':
        formItem = this.fb.group({
          name: ['', Validators.required],
          jobCategoryId: [0, Validators.required],
          maximumApplications: [0, Validators.required],
          validateFrom: ['', Validators.required],
          validateTo: ['', Validators.required],
          description: ['', Validators.required],
          skills: this.fb.array([]),
          responsibilities: this.fb.array([]),
        });
        break;
      case 'Skill':
        formItem = this.fb.group({
          SkillItem: ['', Validators.nullValidator],
        });
        break;
      case 'Responsibility':
        formItem = this.fb.group({
          ResponsibilityItem: ['', Validators.nullValidator],
        });
        break;
    }
    return formItem;
  }

  CreateVacancy() {
    this.API.CreateVacancy(this.VacancyForm.value).subscribe((res) => {
      console.log(res);
      this.SharedMethods.SuccessSwal(res.message);
      setTimeout(() => {
        this.router.navigateByUrl("/vacancy/show");
      }, 1000);
    });
  }

  changejobCategory(event: any) {}
}

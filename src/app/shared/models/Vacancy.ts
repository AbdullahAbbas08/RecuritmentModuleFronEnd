import { JobCategory } from "./JobCategory";


export class Vacancy {
  ID: number;
  Name: string;
  Description: string;
  ValidateFrom: Date;
  ValidateTo: Date;
  MaximumApplications: number;
  JobCategoryId: number;
  JobCategory: JobCategory;
  responsibilities: Responsibility[];
  skills: any[];
  isClosed:boolean
}

export class Responsibility {
    id: number;
    responsibilityItem:string;
}

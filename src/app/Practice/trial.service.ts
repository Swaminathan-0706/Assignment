import { Observable, throwError as ObservableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _http: HttpClient) {}
  url = 'http://dummy.restapiexample.com/api/v1/employees';
  //Original url is working fine in console,but when i set value it is returning Undefined
  getEmployees(): Observable<IEmployee[]> {
    return this._http
      .get<IEmployee[]>(this.url)
      .pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return ObservableThrowError(err.message || 'Something went wrong');
  }
}

export interface IEmployee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  }
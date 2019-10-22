import { Injectable } from '@angular/core';
import { IEmployee } from './employee/IEmployee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private httpClient: HttpClient) { }

    getEmployees(){


        return this.httpClient.get<IEmployee[]>('http://localhost:50500/api/Employees')
        // .pipe(
        //     catchError(this.handleError)
        // );;
    }
    handleError(error: IEmployee[]) {
        console.error(error);
        return Observable.throw(error);
    }
}




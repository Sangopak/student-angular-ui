import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Student } from './../model/student';

const API_URI = environment.apiUrl

@Injectable()
export class RestApiService {

  constructor(private http: Http) { }

  public getAllStudents(): Observable<Student[]> {
    return this.http
            .get(API_URI+'/students')
            .map(response => {
              const students = response.json();
              return students.map((student) => new Student(student))
            })
            .catch(this.handleError);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http
      .post(API_URI + '/students', student)
      .map(response => {
        return new Student(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

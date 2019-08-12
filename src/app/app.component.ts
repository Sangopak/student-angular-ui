import {Component} from '@angular/core';
import { Student } from './model/student';
import { RestApiService } from './rest-api/rest-api.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  students: Student[] = [];

  constructor (
    private restApiService: RestApiService
  ){
    this.title = 'Student Angular App';
  }

  public ngOnInit() {
    this.restApiService
      .getAllStudents()
      .subscribe(
        (students) => {
          this.students = students;
        }
      );
  }
}

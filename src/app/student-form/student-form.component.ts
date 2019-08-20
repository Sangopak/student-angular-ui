import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from './../model/student';
import { RestApiService } from './../rest-api/rest-api.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  student: Student = new Student();

  constructor(private route: ActivatedRoute, private router: Router, private restApiService : RestApiService) { }

  onSubmit() {
    this.restApiService.addStudent(this.student).subscribe(result => this.gotoStudentList());
  }

  gotoStudentList() {
    this.router.navigate(['/students']);
  }

}

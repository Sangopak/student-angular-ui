import { Component, OnInit, Input } from '@angular/core';
import { Student } from './../model/student';
import { RestApiService } from './../rest-api/rest-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

@Input()
students: Student[];

constructor ({
  }
}

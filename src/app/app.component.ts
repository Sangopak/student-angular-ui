import {Component} from '@angular/core';
import { Student } from './model/student';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor (
  ){
    this.title = 'Student Angular App';
  }
}

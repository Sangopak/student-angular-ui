import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{ path: 'students', component: StudentListComponent },
{ path: 'addStudent', component: StudentFormComponent },
{ path: 'about', component: AboutComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

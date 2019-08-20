import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: 'students', component: StudentListComponent },
{ path: 'addStudent', component: StudentFormComponent },
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo:'home', pathMatch:'full'},
{ path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

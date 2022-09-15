import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';


const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'edit/:id', component: UpdateStudentComponent},
  {path: 'create', component: CreateStudentComponent},
  // {path: "delete", component: DeleteStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

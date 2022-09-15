import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from '../student.service';
import {CategoryService} from '../category.service';
import {ICategory} from '../model/ICategory';
import {MatDialog} from '@angular/material/dialog';
import {DeleteStudentComponent} from '../delete-student/delete-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  listStudent: IStudent[] = [];
  categories: ICategory[] = [];
  p = 1;
  student: IStudent;

  constructor(private studentService: StudentService,
              private categoryService: CategoryService,
              private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.studentService.getAll().subscribe(
      (res) => {
        this.listStudent = res;
      }
    );
  }

  openDialogDelete(studentId: string): void {
    this.studentService.findById(studentId).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteStudentComponent, {
        width : '700px',
        data: {data1 : data}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed successfully');
        this.ngOnInit();
      });
    });
}



}

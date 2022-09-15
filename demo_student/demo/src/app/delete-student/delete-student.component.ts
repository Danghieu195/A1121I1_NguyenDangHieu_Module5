import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../student.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  nameStudent: any;
  idStudent: any;

  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private studentService: StudentService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.data.data1.name);
    this.nameStudent = this.data.data1.name;
    this.idStudent = this.data.data1.id;
  }

  deleteCustomer() {
    this.studentService.delete(this.idStudent).subscribe(data => {
      console.log('Da xoa');
      this.dialogRef.close();
      this.snackBar.open('Delete student successfully', 'oke');
    });
  }
}

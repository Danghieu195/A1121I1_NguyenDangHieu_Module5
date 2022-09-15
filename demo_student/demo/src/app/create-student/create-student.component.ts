import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ICategory} from '../model/ICategory';
import { StudentService } from '../student.service';
import { CategoryService } from '../category.service';
import {Router} from '@angular/router';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {


  studentForm: FormGroup = new FormGroup({
    avatar : new FormControl(''),
    id :  new FormControl('', [Validators.required]),
    name :  new FormControl('', [Validators.required]),
    address :  new FormControl('', [Validators.required]),
    phone :  new FormControl('', [Validators.required]),
    email :  new FormControl('', [Validators.required]),
    category :  new FormControl('', [Validators.required]),
  });

  categories: ICategory[];

  constructor(
    private studentService: StudentService,
    private categoryService: CategoryService,
    private router: Router,
    // private snackbar : MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getAllType().subscribe((res) => {
        this.categories = res;
      }
    );
  }

  add() {
    const student: IStudent = {
      avatar: this.studentForm.value.avatar,
      id: this.studentForm.value.id,
      name: this.studentForm.value.name,
      address: this.studentForm.value.address,
      phone: this.studentForm.value.phone,
      email: this.studentForm.value.email,
      // category: {
      //   category_id: this.studentForm.value.category,
      // }
    };
    this.studentService.create(this.studentForm.value).subscribe((res) => {
      this.router.navigateByUrl('');
      // this.snackBar.open("Create successfully!", "ok");
    });
  }

}

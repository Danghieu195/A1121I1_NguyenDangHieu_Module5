import { Component, OnInit } from '@angular/core';
import { IStudent } from '../model/IStudent';
import { ICategory } from '../model/ICategory';
import {StudentService} from '../student.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: IStudent[];
  categories: ICategory[];

  studentForm: FormGroup = new FormGroup({
    avatar : new FormControl(''),
    id :  new FormControl('', [Validators.required]),
    name :  new FormControl('', [Validators.required]),
    address :  new FormControl('', [Validators.required]),
    phone :  new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('/[^0-9]+/g') ]),
    email :  new FormControl('', [Validators.required, Validators.pattern('/^.+@gmail\.com$/')]),
    category :  new FormControl('', [Validators.required]),
  });

  constructor(
    private studentService: StudentService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getType();

    this.studentService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.studentForm.setValue(data);
    });
    this.categoryService.getAllType().subscribe((data) => {
      this.categories = data;
    });
  }
  getType() {
    this.categoryService.getAllType().subscribe((res) => {
      this.categories = res;
    });
  }

  update() {
    this.studentService.update(this.activatedRoute.snapshot.params.id, this.studentForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

}

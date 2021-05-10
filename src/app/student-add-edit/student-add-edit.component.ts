import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css'],
  providers : [StudentService]
})
export class StudentAddEditComponent implements OnInit {

  studentForm: FormGroup | undefined;
  isEdit: Boolean = false;
  msg:String = '';
  constructor( private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) { }

    ngOnInit(){
      this.studentForm = this.formBuilder.group({
        name: [''],
        id: [''],
        address: [''],
        gender: ['']
      })
        this.route.params.subscribe(param => {
          console.log(param)
          if(param && param.id){
            let student = this.studentService.getStudent(param.id);
            if(student && this.studentForm){
              this.studentForm.setValue(student);
              this.isEdit = true;
              }
            else this.router.navigate(['/students'])
          }
        })
    }

    resetForm(){
      console.log('reset',this.studentForm)
      if(this.studentForm){
        this.studentForm.reset();
      }
      
    }
  
    add(){
      if(this.studentForm && this.studentForm.valid){
        this.studentService.studentList.push(this.studentForm.value);
        // this.resetForm();
        console.log('this.studentService.studelost',this.studentService.getStudents())}
        else {
        this.msg = 'Please complete form'
      }
    }
  
    edit(){
      this.msg = '';
      if(this.studentForm && this.studentForm.valid){
        if(this.studentService.studentEdit(this.studentForm.value)){
          this.router.navigate(['/students'])
        }else {
          this.msg = 'Something went wrong'
        }
      }else {
        this.msg = 'Please complete form'
      }
    }

}

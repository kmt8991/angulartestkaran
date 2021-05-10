import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers : [StudentService]
})
export class StudentListComponent implements OnInit {

  studentList : any
  
  constructor(private studentService: StudentService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
  
    }
}

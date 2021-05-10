import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: 'student-add', component: StudentAddEditComponent },
  { path: 'student/:id',      component: StudentViewComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: 'student-add/:id', component: StudentAddEditComponent },
  // {
  //   path: 'students',
  //   component: StudentListComponent
  // },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

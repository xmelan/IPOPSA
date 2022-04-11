import { TeacherComponent } from './components/teacher/teacher.component';
import { SubjectComponent } from './components/subject/subject.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { TrailerAdminComponent } from './components/trailer-admin/trailer-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TrailerListComponent } from './components/trailer-list/trailer-list.component';
import { TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { StudentComponent } from './components/student/student.component';
import { AreaComponent } from './components/area/area.component';
import { AuthGuard } from './auth.guard';
import { GradeComponent } from './components/grade/grade.component';
import { ScoreComponent } from './components/score/score.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/trailerlist',
    pathMatch: 'full',
  },
  {
    path: 'trailer',
    component: TrailerAdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'trailerlist',
    component: TrailerListComponent,
  },
  {
    path: 'trailerlist/:id',
    component: TrailerPreviewComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'area',
    component: AreaComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'grade',
    component: GradeComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

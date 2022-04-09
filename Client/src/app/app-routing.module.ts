import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { TrailerAdminComponent } from './components/trailer-admin/trailer-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TrailerListComponent } from './components/trailer-list/trailer-list.component';
import { TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { StudentComponent } from './components/student/student.component';

import { AuthGuard } from './auth.guard';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

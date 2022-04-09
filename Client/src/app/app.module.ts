import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
//insertar signupcomponents

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TrailerAdminComponent } from './components/trailer-admin/trailer-admin.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrailerListComponent } from './components/trailer-list/trailer-list.component';
import { TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { SearchComponent } from './components/search/search.component';
import { StudentComponent } from './components/student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchPipe,
    TrailerAdminComponent,
    SigninComponent,
    SignupComponent,
    TrailerListComponent,
    TrailerPreviewComponent,
    SearchComponent,
    StudentComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

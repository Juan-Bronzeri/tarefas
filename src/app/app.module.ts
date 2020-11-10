import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { FramePageComponent } from './pages/master/frame.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { DataService } from './services/data.service';
import { MaskDirective } from './directives/mask.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    AssignmentComponent,
    FramePageComponent,
    SignupPageComponent,
    ResetPasswordPageComponent,
    ProfilePageComponent,
    LoadingComponent,
    MaskDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

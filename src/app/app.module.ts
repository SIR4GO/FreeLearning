import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './dashboard/auth/signup/signup.component';
import { LoginComponent } from './dashboard/auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAdminComponent } from './dashboard/auth/login-admin/login-admin.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostHomeComponent } from './post-home/post-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';
import {LoginService} from './dashboard/auth/login.service';
import {RootActivationService} from './root-activation.service';
import {QuillModule} from 'ngx-quill';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ArticleComponent,
    DashboardComponent,
    LoginAdminComponent,
    PostComponent,
    PostHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [PostService , LoginService , RootActivationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

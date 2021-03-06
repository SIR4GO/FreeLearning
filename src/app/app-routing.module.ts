import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAdminComponent } from './dashboard/auth/login-admin/login-admin.component';
import { PostComponent } from './post/post.component';
import {PostHomeComponent} from './post-home/post-home.component';
import {RootActivationService} from './root-activation.service';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'article/:id' , component: ArticleComponent},
  {path: 'login-admin' , component: LoginAdminComponent},
  { path: 'dashboard' , component: DashboardComponent , canActivate: [RootActivationService], children: [
      {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
      },
     {path: 'post' , component: PostComponent , canActivate: [RootActivationService]}
  ]},
  {path: 'post-home' , component: PostHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

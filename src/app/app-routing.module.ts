import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAdminComponent } from './dashboard/auth/login-admin/login-admin.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'article' , component: ArticleComponent},
  { path: 'dashboard' , component: DashboardComponent , children:
  [
     {path: 'login-admin' , component: LoginAdminComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

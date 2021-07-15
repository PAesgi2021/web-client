import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "social-feed", loadChildren: () => import('./social-feed/social-feed.module').then(m => m.SocialFeedModule)},
  {path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: "register", loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: "profile-service-management", loadChildren: () => import('./profile-management/profile-management.module').then(m => m.ProfileManagementModule)},
  {path: "**", redirectTo: "social-feed"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

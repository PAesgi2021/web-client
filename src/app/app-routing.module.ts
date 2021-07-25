import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: "social-feed", loadChildren: () => import('./social-feed/social-feed.module').then(m => m.SocialFeedModule)},
  {path: "register", loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: "profile", loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: "shop", loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  {path: "challenge", loadChildren: () => import('./challenge/challenge.module').then(m => m.ChallengeModule)},
  {path: '', redirectTo: "social-feed", pathMatch: 'full'},
  {path: "**", redirectTo: "social-feed"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "social-feed", loadChildren: () => import('./social-feed/social-feed.module').then(m => m.SocialFeedModule)},
  {path: "**", redirectTo: "social-feed"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

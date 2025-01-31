import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FBAuthGuard } from './auth/fbauth-guard.service';
import { ErrPageComponent } from './error/err-page/err-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [FBAuthGuard],
  },
  {
    path: 'auth',
    outlet: 'actions',
    loadChildren: () =>
      import('./auth/fbauth.module').then((m) => m.FBAuthModule),
  },
  {
    path: 'error',
    component: ErrPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

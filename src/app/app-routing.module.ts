import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCachingComponent } from './api-caching/api-caching.component';
import { BackgroundSyncComponent } from './background-sync/background-sync.component';
import { HomeComponent } from './home/home.component';
import { NativeFeaturesComponent } from './native-features/native-features.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'api-cache',component:ApiCachingComponent
  },
  {
    path:'background-sync',component:BackgroundSyncComponent
  },
  {
    path:'native-feature',component:NativeFeaturesComponent
  },
  {
    path:'push-notification',component:PushNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

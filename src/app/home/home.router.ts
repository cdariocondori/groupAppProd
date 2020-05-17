import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
    {
        path:'notifications',
        loadChildren:() => import('../pages/notifications/notifications.module').then(m=>m.NotificationsPageModule)
    },
    {
        path:'messages',
        loadChildren:() => import('../pages/messages/messages.module').then(m=>m.MessagesPageModule)
    }
]

  }]
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
      })
export class HomeRouter {}
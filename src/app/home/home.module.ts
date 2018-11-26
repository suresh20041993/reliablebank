import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
 RouterModule.forChild([
     {
         path:'',
         component:HomeComponent
     }
 ])

  ],
  declarations: [
      HomeComponent,
       SidebarComponent,
    TopbarComponent
  ]
})
export class homeModule { }

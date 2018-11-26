import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
 RouterModule.forChild([
     {
         path : '',
         component : UserComponent,
         children:[
            {
                path : '',
                component : SignInComponent   
             },
             {
                path : 'signup',
                component : SignUpComponent   
             },
            {
                path: 'login', component: SignInComponent 
            },
         ]   
     }
    
 ])

  ],
  declarations: [
     
     UserComponent,
     SignInComponent,
     SignUpComponent
  ]
})
export class userModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { homeModule } from './home/home.module';
import { UserComponent } from './user/user.component';
import { appRoutes } from './routes';

import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { userModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    //  UserComponent,
    // SignInComponent,
    // SignUpComponent,
    // SidebarComponent,
    // TopbarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    homeModule,
    userModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }

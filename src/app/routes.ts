import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent} from './topbar/topbar.component';

// import { AuthComponent } from './auth/auth.component';

export const appRoutes: Routes = [
    { path: 'home',
     loadChildren: './home/home.module#homeModule'
    // canActivate:[AuthGuard]
    },
    
    // {
    //     path : 'topbar',
    //     component: TopbarComponent
    // },
    
    // {
    //     path : 'sidebar',
    //     component: SidebarComponent
    // },
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },
    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },
    { path : '',
     redirectTo:'/login',
    // loadChildren: './user/user.module#userModule',
      pathMatch : 'full'
    
}
    
];



import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [

    {path:'', component:UsersComponent},
    {path:'user/:id', component:UserComponent}
];

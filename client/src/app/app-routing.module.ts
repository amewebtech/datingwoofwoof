import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
//configuration for routing service, aray of routes
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'members', component: MemberListComponent, canActivate: [AuthGuard]},
  {path:'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard]},
  {path:'lists', component: ListsComponent, canActivate: [AuthGuard]},
  {path:'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path:'errors', component: TestErrorsComponent },
  {path:'not-found',component: NotFoundComponent },
  {path:'server-error', component: ServerErrorComponent },
  {path:'**', component: NotFoundComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

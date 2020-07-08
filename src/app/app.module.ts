import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'comments', component: CommentListComponent},
  {path: 'posts/:id', component: PostListComponent},
  {path: 'comments/:id', component: CommentListComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    CommentListComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

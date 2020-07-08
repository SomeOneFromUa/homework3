import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private HttpComments: HttpClient) { }
  getAllComments = (): Observable<IComment[]> => {
    return this.HttpComments.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getCommentsForPost = (postID: number): Observable<IComment[]> => {
    return this.HttpComments.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
  }
}

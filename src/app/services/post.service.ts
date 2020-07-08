import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpPosts: HttpClient) {}
  getPostsOfUser = (userID: number): Observable<IPost[]> => {
    return this.httpPosts.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
  }
  getAllPosts = (): Observable<IPost[]> => {
    return this.httpPosts.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

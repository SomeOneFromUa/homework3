import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUser: HttpClient) { }
  getUsers = (): Observable<IUser[]> => {
    return  this.httpUser.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}

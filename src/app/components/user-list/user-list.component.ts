import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: IUser[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPost} from '../../interfaces/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts: IPost[];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    const id: number = this.activatedRoute.snapshot.params.id;
    !!id
      ? this.postService.getPostsOfUser(id).subscribe(posts => this.posts = posts)
      : this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }
  ngOnInit(): void {
  }

}

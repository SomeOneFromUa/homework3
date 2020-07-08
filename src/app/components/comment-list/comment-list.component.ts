import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {IComment} from '../../interfaces/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
comments: IComment[];
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    const id: number = this.activatedRoute.snapshot.params.id;
    !!id
    ?  this.commentService.getCommentsForPost(id).subscribe(comments => this.comments = comments)
      : this.commentService.getAllComments().subscribe(comments => this.comments = comments);
  }

  ngOnInit(): void {
  }

}

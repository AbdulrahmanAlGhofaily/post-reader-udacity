import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter();

  constructor() {
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1,
    };
  }

  ngOnInit(): void {}

  upvote(post: Post): void {
    post.votes++;
  }

  downvote(post: Post): void {
    if (post.votes !== 0) {
      post.votes--;
    }
  }

  hide(post: Post): void {
    this.hidePost.emit(post);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  submitForm(): void {
    const post = {
      title: this.title,
      body: this.body,
      votes: 1,
    };

    this.addPost.emit(post);

    this.title = '';
    this.body = '';
  }
}

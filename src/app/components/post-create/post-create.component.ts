import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Post } from '../post-list/posts.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postNumber = 0;
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement) {
    const post: Post = {number: ++this.postNumber, title: this.enteredTitle, content: this.enteredContent};
    this.postCreated.emit(post);
  }





}

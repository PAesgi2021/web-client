import { Injectable } from '@angular/core';
import { Post } from "../../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[];

  constructor() {
    this.posts.push(new Post({
      title: "title",
      description: "description"
    }));
    this.posts.push(new Post({
      title: "title",
      description: "description"
    }));
    this.posts.push(new Post({
      title: "title",
      description: "description"
    }));
  }
}

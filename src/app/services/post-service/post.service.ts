import { Injectable } from '@angular/core';
import { Post } from "../../models/post";
import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.posts.push(
        new Post({
          title: "A very interesting title",
          description: "> beautiful description as you can see",
          isPrivate: false,
          author: new User({
            firstname: "firstname",
            lastname: "lastname",
            email: "email",
            password: "password"
          })
        }));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post-service/post.service";
import { Post } from "../models/post";
import { Router } from "@angular/router";


@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  posts: Post[];
  isFetching = true;

  constructor(
    public postService: PostService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  // -------------------------------------------------------------------------------------------------------------------

  fetchPosts() {
    this.postService.getAllPost().subscribe(response => {
      this.posts = [];
      response.map(post => {
        this.posts.push(new Post({
          ...post
        }));
      });
      this.handleIsFetching();
    });

  }

  handleIsFetching() {
    this.posts ? this.isFetching = false : this.isFetching = true;
    console.log(this.posts);
  }

  handleCreatePostAction() {
    this.router.navigate(["/social-feed/create-post"]);
  }

}

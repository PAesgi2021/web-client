import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post-service/post.service";
import { Post } from "../models/post";
import { FormControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";


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
    private _sanitizer: DomSanitizer
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
  }

  sortByDate(a: Post, b: Post) {
    return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }

  // handleTestImg(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
  // }


}

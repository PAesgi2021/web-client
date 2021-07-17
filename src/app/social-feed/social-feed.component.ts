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
  searchPost = new FormControl('');

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public postService: PostService,
  ) {
  }

  public ngOnInit(): void {
    this.fetchPosts();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public fetchPosts(): void {
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

  public handleIsFetching(): void {
    this.posts ? this.isFetching = false : this.isFetching = true;
  }

  public onPostCreated(newPost: Post): void {
    this.posts.push(newPost);
  }

  public sortByDate(a: Post, b: Post): number {
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

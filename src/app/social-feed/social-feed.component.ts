import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post-service/post.service";
import {Post} from "../models/post";
import {DomSanitizer} from "@angular/platform-browser";
import {AccountService} from "../services/account/account.service";
import {Router} from "@angular/router";
import {ProfileService} from "../services/profile-service/profile.service";


@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  posts: Post[];
  isFetching = true;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public postService: PostService,
    private _sanitizer: DomSanitizer,
    public accountService: AccountService,
    public router: Router,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit(): void {
    this.accountService.checkAuthentication();
    this.profileService.isSelected();
    this.fetchPosts();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public fetchPosts(): void {
    this.postService.getAllPost().subscribe(response => {
      this.posts = [];
      response.map(post => {
        if (post.status) {
          this.posts.push(new Post({
            ...post
          }));
        }
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

}

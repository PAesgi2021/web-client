import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post-service/post.service";

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    console.log(this.postService.posts);
  }

}

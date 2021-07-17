import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/post";
import { PostService } from "../../services/post-service/post.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss']
})
export class PostManagementComponent implements OnInit {

  posts: Post[];
  isFetching: boolean;
  isSearching: boolean;
  myControl: FormControl;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public postService: PostService,
    public router: Router
  ) {
    this.isFetching = true;
    this.isSearching = false;
  }

  public ngOnInit(): void {
    this.posts = this.fetchPosts();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleAddPostAction(): any {
    this.router.navigate(['admin/create-post']);
  }

  public fetchPosts(): Post[] {
    const result: Post[] = [];
    this.postService.getAllPost().subscribe(response => {
      response.map(post => {
        result.push(new Post({
          ...post
        }));
      });
    });

    this.handleIsFetching();
    return result;
  }

  public handleIsFetching(): void {
    this.posts ? this.isFetching = false : this.isFetching = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article-service/article.service";


@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.scss']
})
export class ArticleManagementComponent implements OnInit {

  articles: Article[];
  isFetching: boolean;
  isSearching: boolean;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public articleService: ArticleService,
    public router: Router
  ) {
    this.isFetching = true;
    this.isSearching = false;
  }

  public ngOnInit(): void {
    this.articles = this.fetchArticles();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleAddPostAction(): any {
    this.router.navigate(['admin/create-article']);
  }

  public fetchArticles(): Article[] {
    const result: Article[] = [];
    this.articleService.getAllArticle().subscribe(response => {
      response.map(article => {
        result.push(new Article({
          ...article
        }));
      });
    });

    this.handleIsFetching();
    return result;
  }

  public handleIsFetching(): void {
    this.articles ? this.isFetching = false : this.isFetching = true;
  }

  public handleRemoveClick(id: string) {
    this.articleService.deleteArticle(id).subscribe(console.log);
    this.articles.forEach((value, index) => {
      if (value.id.toString() === id) this.articles.splice(index, 1)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Article } from "../models/article";
import { ArticleService } from "../services/article-service/article.service";
import { AccountService } from "../services/account/account.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  articles: Article[];
  purchased: Article[];
  isFetching: boolean;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public articleService: ArticleService,
    private accountService: AccountService,
  ) {
    this.accountService.checkAuthentication();
    this.purchased = [];
  }

  ngOnInit(): void {
    this.articles = this.fetchArticles();
  }

  // -------------------------------------------------------------------------------------------------------------------

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

  public handleAddedArticle(article: Article): void {
    if (this.purchased.includes(article)) return;
    this.purchased.push(article);
  }

  public handlePurchasedClick(): void {
    console.log(this.purchased);
  }

  public handleResetClick(): void {
    this.purchased = [];
  }

  public getAmountOfPurchased(): number {
    return this.purchased.reduce((amount, article) => amount + (article.price * article.number), 0);
  }

  public handlePlusClick(article: Article) {
    article.number++;
    this.handleAddedArticle(article);
  }

  public handleMinusClick(article: Article) {
    article.number--;

    // if article has 0 number remove it from the purchased articles
    if (article.number > 1) return;
    this.purchased.forEach((value, index) => {
      if (value.name === article.name) this.purchased.splice(index, 1);
    });

  }
}

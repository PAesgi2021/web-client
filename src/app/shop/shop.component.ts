import { Component, OnInit } from '@angular/core';
import { Article } from "../models/article";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  articles: Article[];
  purchased: Article[];

  // -------------------------------------------------------------------------------------------------------------------

  constructor() {
    this.articles = [
      new Article({name: "article_1", price: 1}),
      new Article({name: "article_2", price: 2}),
      new Article({name: "article_3", price: 3}),
      new Article({name: "article_4", price: 4}),
      new Article({name: "article_5", price: 5}),
      new Article({name: "article_6", price: 6}),
      new Article({name: "article_7", price: 7}),
      new Article({name: "article_8", price: 8}),
    ];
    this.purchased = [];
  }

  ngOnInit(): void {
  }

  // -------------------------------------------------------------------------------------------------------------------

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

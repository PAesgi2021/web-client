import { Component, OnInit } from '@angular/core';
import { Article } from "../models/article";
import { ArticleService } from "../services/article-service/article.service";
import { AccountService } from "../services/account/account.service";
import { ProfileService } from "../services/profile-service/profile.service";
import { Profile } from "../models/profile";
import { HttpService } from "../services/utils/http.service";
import { forkJoin } from "rxjs";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  articles: Article[];
  purchased: Article[];
  profile: Profile;
  isFetching: boolean;
  hasError: boolean;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public articleService: ArticleService,
    private accountService: AccountService,
    private profileService: ProfileService,
    private httpService: HttpService
  ) {
    this.accountService.checkAuthentication();
    this.purchased = [];
  }

  ngOnInit(): void {
    this.isFetching = true;
    this.hasError = false;

    forkJoin([
      this.articleService.getAllArticle(),
      this.profileService.getProfileById(this.httpService.getCookie().current_profile_id)
    ]).subscribe(
      values => {
        this.articles = [];
        values[0].map(article => this.articles.push(new Article(article)));
        this.profile = new Profile(values[1]);
        this.handleIsFetching();
      },
      error => console.log(error),
    );
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleIsFetching(): void {
    (this.articles && this.profile) ? this.isFetching = false : this.isFetching = true;
  }

  public handleAddedArticle(article: Article): void {
    if (this.purchased.includes(article)) return;
    this.purchased.push(article);
  }

  public handleResetClick(): void {
    this.purchased = [];
  }

  public getAmountOfPurchased(): number {
    return this.purchased.reduce((amount, article) => amount + (article.price * article.number), 0);
  }

  public handlePlusClick(article: Article): void {
    article.number++;
    this.handleAddedArticle(article);
  }

  public handleMinusClick(article: Article): void {
    article.number--;

    // if article has 0 number remove it from the purchased articles
    if (article.number > 1) return;
    this.purchased.forEach((value, index) => {
      if (value.name === article.name) this.purchased.splice(index, 1);
    });

  }

  public handleCheckoutClick(): void {
    if (this.getAmountOfPurchased() > this.profile.ecoPoint) {
      this.hasError = true;
      return;
    }

    this.hasError = false;
    this.profile.ecoPoint = this.profile.ecoPoint - this.getAmountOfPurchased();
    this.profileService.updateProfile(this.profile.id, {ecoPoint: this.profile.ecoPoint}).subscribe(console.log);
  }
}

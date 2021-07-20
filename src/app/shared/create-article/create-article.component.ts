import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ArticleService } from "../../services/article-service/article.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  createArticleForm: FormGroup;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    private _location: Location,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.createArticleForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl(''),
    });
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleCancelAction() {
    this._location.back();
  }

  public handleSubmitClick() {
    this.articleService.createArticle({
      name: this.createArticleForm.get('name').value,
      description: this.createArticleForm.get('description').value,
      price: this.createArticleForm.get('price').value,
    }).subscribe();
    this.handleCancelAction();
  }
}

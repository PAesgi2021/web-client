import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleDto} from "../dto/article-dto/article.dto";
import {CreateArticleDto} from "../dto/article-dto/create-article.dto";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private API_URL: string = "http://localhost:3000/yt-article";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  getAllArticle(): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(this.API_URL, {responseType: 'json'});
  }

  createArticle(dto: CreateArticleDto): Observable<ArticleDto> {
    return this.http.post<ArticleDto>(this.API_URL, dto);
  }

  deleteArticle(id: string): Observable<ArticleDto> {
    return this.http.delete<ArticleDto>(this.API_URL + '/' + id);
  }

}

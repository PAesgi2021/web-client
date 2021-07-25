import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostDto } from "../dto/post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { Observable } from "rxjs";
import { CreatePostDto } from "../dto/create-post.dto";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL: string = "http://localhost:3000/yt-post";

  constructor(
    private http: HttpClient
  ) {
  }

  // -------------------------------------------------------------------------------------------------------------------

  getAllPost(): Observable<PostDto[]> {
    return this.http.get<PostDto[]>(this.API_URL, {responseType: 'json'});
  }

  createPost(dto: CreatePostDto): Observable<PostDto> {
    return this.http.post<PostDto>(this.API_URL, {...dto, });
  }

  updatePost(id: number, dto: UpdatePostDto): Observable<PostDto> {
    return this.http.patch<PostDto>(`${this.API_URL}/${id}`, dto);
  }

  updateLike(id: number, action: string) {
    return this.http.patch(`${this.API_URL}/${id}/${action}`,null)
  }

  deletePost(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}

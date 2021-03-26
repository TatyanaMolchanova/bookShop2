import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.postUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  showPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}

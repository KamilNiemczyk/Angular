import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../PostInterface';
import { PostFormComponent } from '../post-form/post-form.component';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostFormComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: IPost[] = [];
  constructor(private postService: PostService) { }
  ngOnInit(): void {
    // this.postService.addToLocalStorageTest();
    this.posts = this.postService.getPosts();
  }
  refreshPosts() {
    this.posts = this.postService.getPosts();
  }
  removePosts() {
    this.postService.removePosts();
    this.posts = [];
  }
}

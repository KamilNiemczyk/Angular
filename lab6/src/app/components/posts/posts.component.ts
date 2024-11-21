import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../PostInterface';
import { PostFormComponent } from '../post-form/post-form.component';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostFormComponent, UpperCasePipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: IPost[] = [];
  constructor(private postService: PostService) { }
  page = 1;
  maxPostsPerPage = 2;
  ngOnInit(): void {
    // this.postService.addToLocalStorageTest();
    this.loadPosts();
  }
  loadPosts() {
    this.posts = this.postService.getPostsByPage(this.page, this.maxPostsPerPage);
  }
  refreshPosts() {
    // this.posts = this.postService.getPosts();
    this.loadPosts();
  }
  removePost(id: number) {
    this.postService.removePost(id);
    this.loadPosts();
  }
  removePosts() {
    this.postService.removePosts();
    this.posts = [];
  }
  editPost(id: number) {
    // let post = this.posts.filter(post => post.id === id);
    this.postService.editPost(id);
    this.loadPosts();
  }
  nextPage() {
    this.page++;
    this.loadPosts();
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPosts();
    }
  }
}

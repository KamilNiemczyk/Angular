import { Injectable } from '@angular/core';
import { IPost } from './PostInterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  // public addToLocalStorageTest(){
  //   let post: IPost = {
  //     title: 'test title',
  //     content: 'test content',
  //     createDate: '21.12.2012',
  //     dateOfLastEdit: '13.10.2021'
  //   }
  //   localStorage.setItem('posts', JSON.stringify([post]));
  // }
  public addToLocalStorage(post: IPost) {
    let posts = this.getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  public getPosts(): IPost[] {
    let posts = localStorage.getItem('posts');
    if (posts) {
      return JSON.parse(posts);
    } else {
      return [];
    }
  }
  public removePosts(){
    localStorage.removeItem('posts');
  }
  public removePost(id: number) {
    let posts = this.getPosts();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
  public editPost(id: number) {
    let posts = this.getPosts();
    let post = posts.filter(post => post.id === id);
    if (post.length > 0) {
      post[0].dateOfLastEdit = new Date().toLocaleString();
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }
  public getPostsByPage(page: number, postsPerPage: number): IPost[] {
    const posts = this.getPosts();
    const startPost = (page - 1) * postsPerPage;
    const endPost = startPost + postsPerPage;
    return posts.slice(startPost, endPost);
  }    
}

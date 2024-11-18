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
}

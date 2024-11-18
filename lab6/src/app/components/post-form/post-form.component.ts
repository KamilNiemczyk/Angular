import { Component, Output } from '@angular/core';
// import { title } from 'process';
import {FormsModule} from '@angular/forms';
import { PostService } from '../../post.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  constructor(private postService : PostService) { }
  // ngOnInit(): void {
  // }
  post = {
    title: '',
    content: '',
    createDate : '',
    dateOfLastEdit : ''
  }
  resetForm() {
    this.post = {
      title: '',
      content: '',
      createDate : '',
      dateOfLastEdit : ''
    }
  }
  @Output() refreshPosts = new EventEmitter();
  addNew(){
    this.post.createDate = new Date().toISOString();
    this.post.dateOfLastEdit = new Date().toISOString();
    this.postService.addToLocalStorage(this.post);
    this.resetForm();
    this.refreshPosts.emit();
  }
}

import { Component, Output } from '@angular/core';
// import { title } from 'process';
import {FormsModule} from '@angular/forms';
import { PostService } from '../../post.service';
import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
  providers: [DatePipe]
})
export class PostFormComponent {
  constructor(private postService : PostService, private datePipe: DatePipe) { }
  // ngOnInit(): void {
  // }
  post = {
    id : 0,
    title: '',
    content: '',
    createDate : '',
    dateOfLastEdit : ''
  }
  resetForm() {
    this.post = {
      id : 0,
      title: '',
      content: '',
      createDate : '',
      dateOfLastEdit : ''
    }
  }
  @Output() refreshPosts = new EventEmitter();
  addNew(){
    this.post.id = Math.floor(Math.random() * 1000);
    this.post.createDate = this.datePipe.transform(new Date(), 'dd MMMM yyyy, HH:mm')?.toString() || '';
    this.post.dateOfLastEdit = this.datePipe.transform(new Date(), 'dd MMMM yyyy, HH:mm')?.toString() || '';
    this.postService.addToLocalStorage(this.post);
    this.resetForm();
    this.refreshPosts.emit();
  }
  // editPost(id: number){
  //   this.postService.editPost(id, this.post);
  //   this.resetForm();
  //   this.refreshPosts.emit();
  // }
}

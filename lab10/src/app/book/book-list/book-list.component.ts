import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { IBook } from '../../IBook';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books : IBook[] = [];
  constructor(private bookService : BookServiceService) { }
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }
}

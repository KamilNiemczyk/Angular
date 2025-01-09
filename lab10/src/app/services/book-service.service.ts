import { Injectable } from '@angular/core';
import { IBook } from '../IBook';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  books : IBook[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author : 'Author 3 ',
    }];
  getBooks() {
    return this.books;
  }
  getBook(id: number) {
    return this.books.find(book => book.id === id);
  }
  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
  editBook(book: IBook|undefined) {
    if (book) {
      const index = this.books.findIndex(b => b.id === book.id);
      this.books[index] = book;
    }
  }
  addBook(book: IBook|undefined) {
    if (book) {
      this.books.push(book);
    }
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';
import { IBook } from '../../IBook';
import {FormControl, ReactiveFormsModule, FormGroup, Form} from '@angular/forms';

interface BookForm{
  id: FormControl<number | null>;
  title: FormControl<string | null>;
  author: FormControl<string | null>;
}
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  constructor(private bookservice : BookServiceService, private route : ActivatedRoute
  ) { };
  book : IBook|undefined = undefined;
  id : number|undefined = undefined;
  editMode: boolean = false;

  bookForm: FormGroup<BookForm>= new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
    author: new FormControl('')
  },
  {updateOn: 'change'}
);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if(id) {
        this.book = this.bookservice.getBook(id);
        this.id = id;
        this.editMode = true;
      }
    });
  }
  saveBook() {
    if(this.editMode) {
      if(this.book && this.bookForm) {
        if(this.bookForm.controls.id.value !== 0) {
          this.book.id = this.bookForm.controls.id.value ?? 0;
        }
      }
      if (this.book && this.bookForm) {
        if(this.bookForm.controls.title.value !== '') {
          this.book.title = this.bookForm.controls.title.value ?? '';
        }
      }

      if (this.book && this.bookForm) {
        if(this.bookForm.controls.author.value !== '') {
          this.book.author = this.bookForm.controls.author.value ?? '';
        }
      }
      this.bookservice.editBook(this.book);
    }
    else {
      this.book = {
        id: this.bookForm.controls.id.value ?? 0,
        title: this.bookForm.controls.title.value ?? '',
        author: this.bookForm.controls.author.value ?? ''
      };
      this.bookservice.addBook(this.book);
    }
  }
}

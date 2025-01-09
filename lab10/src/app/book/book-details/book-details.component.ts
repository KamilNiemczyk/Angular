import { Component } from '@angular/core';
import { IBook } from '../../IBook';
import { BookServiceService } from '../../services/book-service.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  constructor(private bookservice : BookServiceService, private route : ActivatedRoute
  ) { };
  book : IBook|undefined = undefined;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.book = this.bookservice.getBook(id);
    });
  }
}

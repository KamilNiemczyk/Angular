import {Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

export const BOOK_ROUTES: Routes = [
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'list'
    },
    {
        path : 'list',
        component : BookListComponent,
        title : 'List of Books'
    },
    {
        path : ':id/form',
        component : BookFormComponent,
        title : 'Book Form'
    },
    {
        path : 'form',
        component : BookFormComponent,
        title : 'Book Form'
    },
    {
        path : ':id/details',
        component : BookDetailsComponent,
        title : 'Book Details'
    }
];

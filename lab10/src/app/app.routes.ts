import { Routes } from '@angular/router';
// import { BOOK_ROUTES } from './book/book.routes';
// import { INFO_ROUTES } from './info/info.routes';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

export const routes: Routes = [
    {
        path : 'book',
        loadChildren: () => import('./book/book.routes').then(m => m.BOOK_ROUTES),
    },
    {
        path : 'info',
        loadChildren: () => import('./info/info.routes').then(m => m.INFO_ROUTES),
    },
    {
        path : 'not-found',
        component : PageNotfoundComponent,
    },
    {
        path : '**',
        redirectTo: 'not-found'
    }
];

import { Component } from '@angular/core';
import { Observable, interval, take, toArray, tap, map, of, delay, forkJoin} from 'rxjs';
import { IAdult } from '../IAdult';
import { IChild } from '../IChild';
import { IUser } from '../IUser';
@Component({
  selector: 'app-obs-server-test',
  standalone: true,
  imports: [],
  templateUrl: './obs-server-test.component.html',
  styleUrl: './obs-server-test.component.scss'
})
export class ObsServerTestComponent {
  // constructor() {
  //   this.fun();
  // }
  // protected fun(){
  //   interval(1000).pipe(take(5), map(()=> Math.floor(Math.random() * 100) + 1), tap((e)=> console.log(e)), toArray(), tap((tab)=> console.log(tab))).subscribe();
  // }

  getUser(){
    const a : IAdult[] = [{id: 1, name: 'John', lastname: 'Doe', role: 'admin'}
    , {id: 2, name: 'Jane', lastname: 'Doe', role: 'user'}
    , {id: 3, name: 'Jim', lastname: 'Doe', role: 'user'}];
    return of(a).pipe(delay(1000));
  }

  getChild(){
    const b : IChild[] = [{id: 1, name: 'Paul', lastname: 'Doe'},
    {id: 2, name: 'Pat', lastname: 'Doe'},
    {id: 3, name: 'Bob', lastname: 'Doe'}];
    return of(b).pipe(delay(1000));
  }

  ngOnInit() {
    forkJoin({users: this.getUser(), children: this.getChild()})
    .pipe(
      map(({users, children}) => {
        const result : IUser[] = [
            ...users.map(({name, lastname}) => ({name, lastname})),
            ...children.map(({name, lastname}) => ({name, lastname}))
          ];
          return result;
          }
        )
    )
    .subscribe((users) => users.forEach((user) => console.log(user)));
  }
  
}

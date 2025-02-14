import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private log: boolean = false;

  public isLoggedIn(): boolean {
    return this.log
  }

  public login(): void {
    this.log = true;
  }

  public logout(): void {
    this.log = false;
  }

  public getProfile(){
    console.log('Profile Request from service');
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((el) => {
      console.log('PO SUBSCRIBE', el);
    });
  }

}

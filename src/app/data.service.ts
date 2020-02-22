import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor(private httpClient: HttpClient) {

  }

  public saveData(user: User): Observable<User> {

    return this.httpClient.post<User>("http://localhost:9090/user", user);

  }


  public getData(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:9090/user");

  }

  public deleteData(fname): Observable<User[]> {

    return this.httpClient.delete<User[]>("http://localhost:9090/user/"+fname);

  }


  getUserByFname(fname) {
    console.log(fname);
    let user: User;
    for (let index = 0; index < this.users.length; index++) {

      if (fname == this.users[index].fname) {
        user = this.users[index];
      }
    }
    return user;
  }
}

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



  public getUserByFname(firstname :string):Observable<User>
  {

    return this.httpClient.get<User>("http://localhost:9090/user/"+firstname);
  }

  public getData(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:9090/user");

  }

  public deleteData(fname): Observable<User[]> {

    return this.httpClient.delete<User[]>("http://localhost:9090/user/"+fname);

  }
}

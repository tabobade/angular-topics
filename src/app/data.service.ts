import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() {

  }

  public saveData(user: User): boolean {



    for (let index = 0; index < this.users.length; index++) {

      if (user.fname == this.users[index].fname) {
        this.users.splice(index, 1);
        this.users.push(user);
        return true;
      }
    }

    this.users.push(user);
    return true;
  }


  public getData() {
    return this.users;
  }

  public deleteData(fname) {

    for (let index = 0; index < this.users.length; index++) {

      if (fname == this.users[index].fname) {
        this.users.splice(index, 1);

        console.log("Data Removed");
      }
      console.log(this.users.length);
    }
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

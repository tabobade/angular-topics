import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users:User[]=[];
  constructor(private dataService:DataService,private router:Router) {
this.users=this.dataService.getData();


   }

  ngOnInit() {
  }
  delete(firstName)
  {
console.log(firstName);
this.dataService.deleteData(firstName);
  }

  edit(firstName)
  {
this.router.navigate(["registration.htm",firstName]);
  }

}

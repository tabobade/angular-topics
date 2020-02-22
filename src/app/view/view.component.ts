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
this.dataService.getData().subscribe(response=>{
console.log(response)
  this.users=response;
},
  error=>{


  });


   }

  ngOnInit() {
  }
  delete(firstName)
  {
console.log(firstName);
this.dataService.deleteData(firstName).subscribe(resp=>
  {

    this.users=resp;
  },
  err=>{

  }
  );
  }

  edit(firstName)
  {
this.router.navigate(["registration.htm",firstName]);
  }

}

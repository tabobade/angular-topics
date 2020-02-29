import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:string;
  constructor(private router:Router,private cookieService:CookieService) { }

  ngOnInit() {

    this.user=this.cookieService.get('username');
  }
  logout()
  
  {

this.cookieService.deleteAll();
this.router.navigateByUrl("");

  }
}

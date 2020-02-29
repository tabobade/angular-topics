import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {


   this.loginForm= this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  login()
  {
console.log(this.loginForm.value);
if(this.loginForm.value.username=='tanveer'&& this.loginForm.value.password=='tanveer')
this.cookieService.set('username',this.loginForm.value.username);
this.cookieService.set('isAuthenticated','true');
this.router.navigateByUrl("registration.htm");
  }
}

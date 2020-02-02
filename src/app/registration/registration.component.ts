import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {


    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: [''],
      gender: []
    });


  }


  ngOnInit() {

    var fname = this.activatedRoute.snapshot.paramMap.get("id");
if(fname!=null)
    {
      
  var user:User=    this.dataService.getUserByFname(fname);
      console.log(">>>>>>"+fname);
  this.userForm.patchValue({

    fname:user.fname,
    lname:user.lname,
    gender:user.gender 

  });
  
  }
  }


  submitDetails() {
    console.log(this.userForm.value);
    this.dataService.saveData(this.userForm.value);
    this.router.navigateByUrl("view.htm");
  }

}

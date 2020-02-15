import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
hobbiesArr:string[]=["CRICKET","MUSIC","TRAVELLING","COOKINGs"];

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {


    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: [''],
      gender: [''],
hobbies:new FormArray( [],[Validators.required])
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
  var array :FormArray=this.userForm.get("hobbies") as FormArray
  user.hobbies.forEach(element=>{
    array.push(new FormControl(element));
  
  })
}
  }


  submitDetails() {
    console.log(this.userForm.value);
   this.dataService.saveData(this.userForm.value);
    this.router.navigateByUrl("view.htm");
  }


  onChangeHobbies(event)

  
      {   var array: FormArray = this.userForm.get("hobbies") as FormArray;

      if (event.target.checked) {
      array.push(new FormControl(event.target.value));
      }
      else {
        var index = 0;
        this.userForm.get("hobbies").value.forEach(element => {
          if (element == event.target.value) {
            array.removeAt(index);
        }
        index++;
      });
    
    }
  
  }


}

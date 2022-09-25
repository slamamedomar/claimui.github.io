import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public registerForm !: FormGroup ;

  constructor(private formBuilder : FormBuilder , private http : HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName:[''],
      email:[''],
      password:[''],
      tel:[''],

    })
  }

  register() {
   // this.http.post<any>("http://localhost:4200/users",this.registerForm.value).
   //subscribe(res=>{
   // alert(" registred succ")
  //})
  }

}

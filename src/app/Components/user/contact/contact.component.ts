import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm !: FormGroup ;

  constructor(private formBuilder : FormBuilder , private http : HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({

      email:[''],
      fullName:[''],
      textArea:['']

    })
  }
  contact() {

  }


}

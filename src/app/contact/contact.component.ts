import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm: any;

  constructor(private formBuilder: FormBuilder) { 
   
    this.userForm = this.formBuilder.group({
     
    });
   
  }


  saveContent() {
    // if (this.userForm.dirty && this.userForm.valid) {
    //   alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    // }
  }

  ngOnInit() {
   
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
   contactForm: FormGroup;
  //  contactForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   message: new FormControl()
  // });

  constructor(private formBuilder: FormBuilder) { }

  selection = "Reason for contact";
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name:  ['', Validators.required],
      email:  new FormControl('', [Validators.required, validateEmail]),
      message:  ['', Validators.required]
    });
  }

  select(option){
    if(option == 0)
      this.selection = "Healthcare Marketplace";
    if(option == 1)
      this.selection = "Technical Support";
    if(option == 2)
      this.selection = "Website Feedback";
   // this.contactForm[reason].errors = fasle;
  }
}

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
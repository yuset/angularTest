import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

  glossary_items = [];
  all_items = [];
  select = "Language";
  criteria = '';

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('app/glossary/glossary.json').subscribe(
      (data)=>{
        if(data.status == 200){
          data.json().glossary.forEach(element => {
            this.glossary_items.push(element);
            this.all_items.push(element);
          });
          this.glossary_items.sort(this.sort);
          this.all_items.sort(this.sort);
        }
      });
  }

 
 sort(a,b){
    return a.title > b.title ? 1 : -1; 
  }
 

  filter(lang){
    this.glossary_items = [];

    if(lang == 'en'){
      this.select = 'English';
      
      this.all_items.forEach(element => {
        if(element.lang == 'en')
          this.glossary_items.push(element);
      });
    }
    if(lang == 'sp'){ 
      this.select = 'Spanish';
      this.all_items.forEach(element => {
        if(element.lang == 'es')
          this.glossary_items.push(element);
      });
    }
    if(lang == 'both') {
      this.select = 'Both';
      this.glossary_items = this.all_items;
    }
    console.log(lang);
  }

  search(value){
    console.log(value);
    if(value == '')
    {
      this.glossary_items = this.all_items;
    }
    else{
      this.glossary_items = [];
      var lang = 'none';
      if(this.select != 'Language' && this.select != 'Both'){
        lang = (this.select == 'English')? 'en': 'es';
      }
      console.log(lang);
      this.all_items.forEach(element => {
        if(element.excerpt.indexOf(value) !== -1){
          if(lang != 'none'){
            if(lang == element.lang){
              this.glossary_items.push(element);
            }
          }
          else{
            this.glossary_items.push(element);
          }
        }
      });
      console.log(value);
    }
    
  }

}

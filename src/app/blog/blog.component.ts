import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog_items = [];
  all_items = [];
  select = "Language";

  constructor(private http: Http) { }
  
  ngOnInit() {
    this.http.get('app/blog/blogs.json').subscribe(
      (data)=>{
        if(data.status == 200){
          data.json().blog.forEach(element => {
            this.blog_items.push(element);
            this.all_items.push(element);
          });
        }
      });
  }

  filter(lang){
    this.blog_items = [];

    if(lang == 'en'){
      this.select = 'English';
      
      this.all_items.forEach(element => {
        if(element.lang == 'en')
          this.blog_items.push(element);
      });
    }
    if(lang == 'sp'){ 
      this.select = 'Spanish';
      this.all_items.forEach(element => {
        if(element.lang == 'es')
          this.blog_items.push(element);
      });
    }
    if(lang == 'both') {
      this.select = 'Both';
      this.blog_items = this.all_items;
    }
    console.log(lang);
  }
}

import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BlogModel} from "../../stores/Blog/blog.model";
import {getBlogs} from "../../stores/Blog/blog.selectors";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList!:BlogModel[];
  constructor(private  store:Store<{blog:BlogModel[]}>) {
  }


  ngOnInit(): void {

    this.store.select(getBlogs).subscribe(item=>{
      this.blogList=item
      console.log(this.blogList)
    })
  }

}

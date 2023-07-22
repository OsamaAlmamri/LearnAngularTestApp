import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BlogModel, Blogs} from "../../stores/Blog/blog.model";
import {getBlogs} from "../../stores/Blog/blog.selectors";
import {MatDialog} from "@angular/material/dialog";
import {AddBlogComponent} from "./add-blog/add-blog.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList!:BlogModel[];
  constructor(private  store:Store<{blog:Blogs}>,private dialog:MatDialog) {
  }


  ngOnInit(): void {

    this.store.select(getBlogs).subscribe(items=>{
      this.blogList=items
      console.log(this.blogList)
    })
  }

  addBlog()
  {
   this.openPopup()
  }

  editBlog(id:number)
  {
   this.openPopup('edit Blog',id,true)
  }
  deleteBlog(id:number)
  {
  }

  openPopup(title:string='add Blog',id:number=0,isEdit:boolean=false)
  {

    this.dialog.open(AddBlogComponent,{
      width:'40%',
      data:{
        id:id,
        isEdit:isEdit,
        title:title,
      }
    })
  }


}

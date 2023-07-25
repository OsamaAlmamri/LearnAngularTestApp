import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogModel} from "../stores/Blog/blog.model";
import {Observable,tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private  http:HttpClient) { }
  haveAccess()
  {
    return true
  }
  getAllBlogs():Observable<BlogModel[]>
  {
    return this.http.get<BlogModel[]>('http://localhost:3000/blogs');
  }
  addBlog(blogInput:BlogModel)
  {
    return this.http.post<BlogModel[]>('http://localhost:3000/blogs',blogInput).pipe(
      tap(()=>{
        this.http.get<BlogModel>('http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc')
      })
    );
  }
}


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {MasterService} from "../../app/master.service";
import {
  addBlog,
  addBlogSuccess,
  Load_Blogs,
  Load_Blogs_Success,
  loadBlogsFailure,
  loadBlogsSuccess
} from "./blog.actions";
import {BlogModel} from "./blog.model";

@Injectable()
export class BlogEffects{


  loadBlogs$ = createEffect(() => this.actions$.pipe(
      ofType(Load_Blogs),
      exhaustMap((action) => this.masterService.getAllBlogs()
        .pipe(
          map(blogs => {
            return loadBlogsSuccess({blogList:blogs});
            }),
          catchError((_error) => of(loadBlogsFailure({errorText:_error})))
        ))
    )
  );
  addBlog$ = createEffect(() => this.actions$.pipe(
      ofType(addBlog),
      exhaustMap((action) => this.masterService.addBlog(action.blogInputs)
        .pipe(
          map(data => {
            return addBlogSuccess({blogInputs:data[0] as BlogModel});
            }),
          catchError((_error) => of(loadBlogsFailure({errorText:_error})))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private masterService: MasterService
  ) {}

}

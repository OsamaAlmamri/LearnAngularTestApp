
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {MasterService} from "../../app/master.service";
import {Load_Blogs, Load_Blogs_Success, loadBlogsSuccess} from "./blog.actions";

@Injectable()
export class BlogEffects{


  loadBlogs$ = createEffect(() => this.actions$.pipe(
      ofType(Load_Blogs),
      exhaustMap((action) => this.masterService.getAllBlogs()
        .pipe(
          map(blogs => {
            return loadBlogsSuccess({blogList:blogs});
            }),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private masterService: MasterService
  ) {}

}

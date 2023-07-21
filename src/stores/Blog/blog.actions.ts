
import {createAction, props} from "@ngrx/store";
import {BlogModel} from "./blog.model";

export const loadBlogs=createAction('loadBlogs')
export const addBlog=createAction('loadBlogs',props<{blogInputs: BlogModel }>())

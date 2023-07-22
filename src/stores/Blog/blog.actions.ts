
import {createAction, props} from "@ngrx/store";
import {BlogModel} from "./blog.model";

export const loadBlogs=createAction('loadBlogs')
export const addBlog=createAction('addBlog',props<{blogInputs: BlogModel }>())
export const updateBlog=createAction('updateBlog',props<{blogInputs: BlogModel }>())

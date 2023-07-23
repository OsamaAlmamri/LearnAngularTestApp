
import {createAction, props} from "@ngrx/store";
import {BlogModel} from "./blog.model";

export const Load_Blogs_Success="[blogLoad] load blog success"
export const Load_Blogs_Failure="[blogLoad] load blog failure"
export const Load_Blogs="[blogLoad] load blog"
export const loadBlogsSuccess=createAction(Load_Blogs_Success,props<{blogList:BlogModel[]}>())
export const loadBlogsFailure=createAction(Load_Blogs_Failure,props<{errorText:any}>())
export const loadBlogs=createAction(Load_Blogs)
export const addBlog=createAction('addBlog',props<{blogInputs: BlogModel }>())
export const updateBlog=createAction('updateBlog',props<{blogInputs: BlogModel }>())
export const deleteBlog=createAction('deleteBlog',props<{id: number }>())

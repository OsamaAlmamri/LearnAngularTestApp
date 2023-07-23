
import {Store, createFeatureSelector, createSelector} from "@ngrx/store";
import {BlogModel, Blogs} from "./blog.model";

const getBlogState = createFeatureSelector<Blogs>('blog');
export const getBlogs = createSelector(getBlogState, (state) => {
  return state.blogList
})
export const getBlogInfo = createSelector(getBlogState, (state) => {
  return state
})
export const getBlogById=(blogId:number) => createSelector(getBlogState, (state) => {
  return state.blogList.find((blog:BlogModel)=>blog.id===blogId) as BlogModel
})

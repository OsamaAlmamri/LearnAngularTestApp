
import {Store, createFeatureSelector, createSelector} from "@ngrx/store";
import {BlogModel} from "./blog.model";

const getBlogState = createFeatureSelector<BlogModel[]>('blog');
export const getBlogs = createSelector(getBlogState, (state) => {
  return state
})

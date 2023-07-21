import {createReducer, on} from "@ngrx/store";
import {BlogState} from "./blog.state";
import {loadBlogs} from "./blog.actions";

const _blogReducer = createReducer(BlogState,
  on(loadBlogs, (state) => {
    return {
      ...state,
    }
  })
);

export function BlogReducer(state: any, action: any){
  return _blogReducer(state, action);
}

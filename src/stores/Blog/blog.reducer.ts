import {createReducer, on} from "@ngrx/store";
import {BlogState} from "./blog.state";
import {addBlog, loadBlogs} from "./blog.actions";

const _blogReducer = createReducer(BlogState,
  on(loadBlogs, (state) => {
    return {
      ...state,
    }
  }),
  on(addBlog, (state,actions) => {
    const blog={...actions.blogInputs}
    blog.id=state.blogList.length+1;
    return {
      ...state,
      blogList:[...state.blogList,blog]
    }
  })
);

export function BlogReducer(state: any, action: any){
  return _blogReducer(state, action);
}

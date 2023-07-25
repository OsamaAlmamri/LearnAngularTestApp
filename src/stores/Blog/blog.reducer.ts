import {createReducer, on} from "@ngrx/store";
import {BlogState} from "./blog.state";
import {
  addBlog,
  addBlogSuccess,
  deleteBlog,
  loadBlogs,
  loadBlogsFailure,
  loadBlogsSuccess,
  updateBlog
} from "./blog.actions";

const _blogReducer = createReducer(BlogState,
  on(loadBlogs, (state) => {
    return {
      ...state,
    }
  }),
  // on(addBlog, (state,actions) => {
  //   const blog={...actions.blogInputs}
  //   blog.id=state.blogList.length+1;
  //   return {
  //     ...state,
  //     blogList:[...state.blogList,blog]
  //   }
  // }),
  on(addBlogSuccess, (state,actions) => {
    const blog={...actions.blogInputs}
    return {
      ...state,
      blogList:[...state.blogList,blog]
    }
  }),
  on(loadBlogsSuccess, (state,actions) => {

    return {
      ...state,
      blogList:[...actions.blogList]
    }
  }),
  on(updateBlog, (state,actions) => {
    const _blog={...actions.blogInputs}
    const updateBlog=state.blogList.map(blog=>{
      return _blog.id==blog.id?_blog:blog
    })
    return {
      ...state,
      blogList:updateBlog
    }
  }),
  on(loadBlogsFailure, (state,actions) => {

    return {
      ...state,
      blogList:[],
      errorsMessages:actions.errorText
    }
  }),
  on(deleteBlog, (state,actions) => {


    const updateBlog=state.blogList.filter(blog=>{
      return blog.id!==actions.id
    })
    return {
      ...state,
      blogList:updateBlog
    }
  })
);

export function BlogReducer(state: any, action: any){
  return _blogReducer(state, action);
}

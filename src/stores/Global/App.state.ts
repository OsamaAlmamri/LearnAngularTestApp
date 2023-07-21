import {Counter2Reducer} from "../counter2/counter2.reducer";
import {counterReducer} from "../counter/counter.reducer";
import {BlogReducer} from "../Blog/blog.reducer";

export  const AppState={
  count:counterReducer,
  count2:Counter2Reducer,
  blog:BlogReducer,
}

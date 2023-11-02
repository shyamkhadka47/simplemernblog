import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../reducer/blogs";
const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;

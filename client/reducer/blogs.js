import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  singleBlogs:[],
  status: "",
  singleStatus:"",
  singleError:"",
  error: "",
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchasyncblogs.pending, (state) => {
        state.blogs = [];
        state.status = "Loading";
      })
      .addCase(fetchasyncblogs.fulfilled, (state, action) => {
        state.status = "Success";
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(fetchasyncblogs.rejected, (state) => {
        state.blogs = [];
        state.status = "Failed";
        state.error = "something went Wrong";
      })
      .addCase(deleteAsyncBlogs.pending, (state) => {
        state.blogs = [];
        state.status = "Loading";
      })
      .addCase(deleteAsyncBlogs.fulfilled, (state, action) => {
        state.status = "Success";
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(deleteAsyncBlogs.rejected, (state) => {
        state.blogs = [];
        state.status = "Failed";
        state.error = "something went Wrong";
      })
      .addCase(fetchSingleasyncblogs.pending, (state) => {
        state.singleBlogs = [];
        state.singleStatus = "Loading";
      })
      .addCase(fetchSingleasyncblogs.fulfilled, (state, action) => {
        state.singleStatus = "Success";
        state.singleBlogs = action.payload;
        state.singleError = null;
      })
      .addCase(fetchSingleasyncblogs.rejected, (state) => {
        state.singleBlogs = [];
        state.singleStatus = "Failed";
        state.singleError = "something went Wrong";
      })
      .addCase(updateAsyncBlogs.pending, (state) => {
        
        state.singleStatus = "Loading";
      })
      .addCase(updateAsyncBlogs.fulfilled, (state, action) => {
        state.singleStatus = "Success";
        state.blogs = action.payload;
        state.singleError = null;
      })
      .addCase(updateAsyncBlogs.rejected, (state) => {
        
        state.singleStatus = "Failed";
        state.singleError = "something went Wrong";
      })
      

  },
});

export const fetchasyncblogs = createAsyncThunk("blogs/get", async () => {
  const res = await axios.get("http://localhost:5000/get-blogs");
  return res.data;
});

export const fetchSingleasyncblogs = createAsyncThunk("singgleblogs/get", async (id) => {
  const res = await axios.get("http://localhost:5000/get-blogs/"+id);

  return res.data;
});


export const postAsyncblogs = createAsyncThunk(
  "blogs/post",
  async (userinput) => {
    const req = await axios.post("http://localhost:5000/add-blog", {
      title: userinput.title,
      description: userinput.desc,
    });
    return req.data
  }
);

export const updateAsyncBlogs = createAsyncThunk("update/blog", async ( userinput) => {
  const res = await axios.put("http://localhost:5000/edit-blog/" + userinput.id, {
    title:userinput.title,
    description:userinput.desc
  });
  

  return res.data.blogs

});


export const deleteAsyncBlogs=createAsyncThunk("delete/asyncblogs", async(id)=>{
  
  const res =await axios.delete("http://localhost:5000/delete-blog/"+id)

  console.log(res)
  return res.data
} )

export default blogSlice.reducer;

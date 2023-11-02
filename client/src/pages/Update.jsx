import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { fetchSingleasyncblogs, updateAsyncBlogs } from "../../reducer/blogs";
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  

  useEffect(() => {
   dispatch(fetchSingleasyncblogs(id)).then(res=>{setTitle(res.payload.title); setDesc(res.payload.description)})
   
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle]=useState("")
  const [desc, setDesc]=useState( "")

  

  const handleChange = (e) => {
    setTitle(e.target.value)
    
   
  };

  const handleSubmit = async (e, ) => {
    e.preventDefault();
    dispatch(updateAsyncBlogs({id, title, desc}));

    
    navigate("/");
  };
  return (
    <div>
      <div className="max-w-[1280px] mx-auto ">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-center capitalize text-2xl font-bold">
            update blog{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="Title" className="font-semibold">
                Title:{" "}
              </label>
              <input
                type="text"
                name="title"
                value={title && title}
                onChange={handleChange}
                className="outline-none border w-full h-10 px-2"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="Description" className="font-semibold">
                Description:{" "}
              </label>
              <textarea
                rows={10}
                name="desc"
                value={desc && desc}
                onChange={(e)=>setDesc(e.target.value)}
                type="text"
                className="outline-none border w-full h-[500[px] px-2"
              />
            </div>
            <button
              type="submit"
              className="border hover:bg-green-500 hover:text-white trans p-4 mt-5 ml-[200px]"
            >
              Submit
            </button>
          </form>


          
        </div>
      </div>
    </div>
  );
};

export default Update;

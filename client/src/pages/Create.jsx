import { useState } from "react";

import { useDispatch } from "react-redux";
import { postAsyncblogs } from "../../reducer/blogs";
import {useNavigate} from "react-router-dom"

const Create = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [data, setData] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();
    dispatch(postAsyncblogs(data))

    setData({
      title:"",
      desc:""
    })
    navigate("/")
  };

  return (
    <div className="max-w-[1280px] mx-auto ">
      <div className="max-w-[500px] mx-auto">
        <h1 className="text-center capitalize text-2xl font-bold">
          create blogs
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="Title" className="font-semibold">
              Title:{" "}
            </label>
            <input
              type="text"
              name="title"
              value={data.title}
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
              value={data.desc}
              onChange={handleChange}
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
  );
};

export default Create;

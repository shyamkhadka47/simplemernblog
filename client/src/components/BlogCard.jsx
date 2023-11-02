import { useEffect, } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAsyncBlogs,
  fetchasyncblogs,
 
} from "../../reducer/blogs";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  
 


  const deleteBlogs = (id) => {
    dispatch(deleteAsyncBlogs(id));
  };

  useEffect(() => {
    dispatch(fetchasyncblogs());
   
  }, [blogs.title, blogs.description]);

  return (
    <>
      {blogs &&
        blogs.map((el, i) => (
          <div className="max-w-[800px] p-2 shadow mx-auto mb-5" key={i}>
            <div className="flex flex-col  gap-5" key={i}>
              <div className="flex justify-end gap-5">
                <MdDelete
                  className=" cursor-pointer"
                  onClick={() => deleteBlogs(el._id)}
                  size={20}
                />
                <Link to={`/update/${el._id}`}>
                  <BiEdit className=" cursor-pointer" size={20} />
                </Link>
              </div>

              <div>
                <h1 className="capitalize font-bold text-xl">{el.title}</h1>
              </div>

              <div>
                <h1 className="capitalize  ">{el.description}</h1>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogCard;

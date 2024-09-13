import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs?.map((blog, ind) => (
            <BlogCard
              key={ind}
              authorname={blog?.author.name}
              title={blog?.title}
              content={blog?.content}
              publishedDate={Date()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

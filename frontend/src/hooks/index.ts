import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        "Authorization": localStorage.getItem("token"),
      },
    });
    console.log(res)
    setBlogs(res.data);
  };
  useEffect(() => {
    setLoading(true);
    fetchBlogs();
    setLoading(false);
  }, []);
  return {
    loading,
    blogs,
  };
};

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const title = "All Blogs!";
  const [blogs, setBlog] = useState([
    { title: "Viraj", body: "I am the Dad...", id: 1 },
    { title: "Khushboo", body: "I am the Mom...", id: 2 },
    { title: "Nyra", body: "I am the Big Sis...", id: 3 },
    { title: "Nishi", body: "I am the Li'l Sis", id: 4 },
  ]);

  const [name, setName] = useState("Nishi");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  useEffect(() => {
    console.log("use effect");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter((blog) => blog.title === "Viraj")} title="Viraj's Blog" /> */}
      <button onClick={() => setName("Nyra")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const title = "All Blogs!";
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Is Loading...</div>}
      {data && <BlogList blogs={data} title={title} />}
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  console.log("id...", id);
  const title = "Blog Details!";
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then((res) => {
      console.log("blog is deleted...");
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Is Loading...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <div>{data.details}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

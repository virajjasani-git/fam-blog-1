import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [details, setDetails] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, details };
    //console.log(blog);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        console.log("new blog is added");
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="create">
      <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog Body: </label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <label>Blog Details: </label>
        <textarea type="text" required value={details} onChange={(e) => setDetails(e.target.value)} />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;

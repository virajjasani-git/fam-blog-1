import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h2>404 Error</h2>
      <p>Sorry. Page not found....</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Error404;

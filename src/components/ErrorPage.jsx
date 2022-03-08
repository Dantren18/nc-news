import { Link } from "react-router-dom";

export default function ErrorPage({ status, msg }) {
  return (
    <main>
      <h3>
        {status} {msg || "You are very lost"}
      </h3>
      <Link to="/"> Back to Safety</Link>
    </main>
  );
}

import { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import Header from "./Header";
import Navigation from "./Navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function SingleArticleComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  console.log("hello 1");

  useEffect(() => {
    getComments(article_id)
      .then((itemData) => {
        console.log(itemData, "inside effect thingy");
        console.log("hello");
        setComments(Object.values(itemData));
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [article_id]);

  console.log(comments, "comments in component");

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <ErrorPage />;
  return (
    <section>
      <div className="grid">{comments.map(CommentCard)}</div>
    </section>
  );
}

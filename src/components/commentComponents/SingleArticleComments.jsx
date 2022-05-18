import { useState, useEffect } from "react";
import { fetchComments } from "../../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import ErrorPage from "../mainComponents/ErrorPage";
import SubmitCommentCard from "./SubmitCommentCard";
import classes from "./CommentComponents.module.css";

export default function SingleArticleComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchComments(article_id)
      .then((itemData) => {
        setComments(Object.values(itemData));
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status
          }
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <ErrorPage />;
  return (
    <section>
      <h1 className={classes.commentTitle}>Comments</h1>
      <div className={classes.commentDiv}>{comments.map(CommentCard)}</div>
      <SubmitCommentCard />
    </section>
  );
}

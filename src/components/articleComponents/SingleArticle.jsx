import { useState, useEffect } from "react";
import { fetchArticleByID } from "../../api";
import ErrorPage from "../mainComponents/ErrorPage";
import Header from "../mainComponents/Header";
import Navigation from "../mainComponents/Navigation";
import ArticleVote from "./ArticleVote";
import SingleArticleComments from "../commentComponents/SingleArticleComments";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SingleFullArticle() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleByID(article_id)
      .then((itemData) => {
        setArticle(itemData);
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;
  return (
    <section>
      <Header />
      <Navigation />
      <Card>
        <Card.Header>
          Written by: {article.author}. {article.comment_count} comments. Topic:{" "}
          {article.topic}. Published: {article.created_at}.
          <ArticleVote votes={article.votes} article_id={article.article_id} />
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: 40 }}>{article.title}</Card.Title>
          <Card.Text style={{ fontSize: 20 }}>{article.body}</Card.Text>
        </Card.Body>
      </Card>
      <SingleArticleComments />
    </section>
  );
}

import { useState, useEffect } from "react";
import { fetchArticleByID } from "../../api";
import ErrorPage from "../mainComponents/ErrorPage";
import Header from "../mainComponents/Header";
import Navigation from "../mainComponents/Navigation";
import ArticleVote from "./ArticleVote";
import commentImage from "../../assets/comment.png";
import thumbsUpImage from "../../assets/thumbsup.png";
import thumbsDownImage from "../../assets/thumbsdown.png";
import SingleArticleComments from "../commentComponents/SingleArticleComments";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./ArticleComponents.module.css";
import { patchArticle } from "../../api";

export default function SingleFullArticle() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const [articleVotes, setArticleVotes] = useState();

  const handleClickIncrease = () => {
    setArticleVotes((currentVotes) => (currentVotes += 1));
    patchArticle(article_id, 1);
  };

  const handleClickDecrease = () => {
    setArticleVotes((currentVotes) => (currentVotes -= 1));
    patchArticle(article_id, -1);
  };

  useEffect(() => {
    setArticleVotes(article.votes);
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
            status
          }
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [article_id, article.votes]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;
  return (
    <section>
      <Navigation />
      <Header />
      <div className={classes.articleDiv}>
        <span className={classes.articleTitle}>{article.title}</span>
        <div className={classes.articleInfo}>
          <span className={classes.articleComments}>
            {article.comment_count}
            <img
              src={commentImage}
              alt="topic"
              className={classes.commentImage}
            ></img>
          </span>
          <span className={classes.articleAuthor}>
            Written by: {article.author}
          </span>
          <span className={classes.articleAuthor}>
            {new Date(article.created_at).toLocaleDateString("en-GB")}
          </span>
          <br />
          <img
            src={thumbsDownImage}
            alt="topic"
            className={classes.voteImage}
            onClick={handleClickDecrease}
          ></img>
          <span className={classes.votesArticle}>{articleVotes}</span>
          <img
            src={thumbsUpImage}
            alt="topic"
            className={classes.voteImage}
            onClick={handleClickIncrease}
          ></img>
        </div>
        <br />
        <p className={classes.articleBody}>{article.body}</p>
      </div>
      <SingleArticleComments />
    </section>
  );
}

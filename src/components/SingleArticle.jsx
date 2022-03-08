import { useState, useEffect } from "react";
import { fetchArticleByID } from "../api";
import ArticleCard from "./ArticleCard.jsx";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import Navigation from "./Navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AllArticles() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(article_id)
      .then((itemData) => {
        setArticle(Object.values(itemData));
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
  }, [genre_slug]);

  if (isLoading) return <ErrorPage />;
  if (error) return <p>Error</p>;
  return (
    <section>
      <Header />
      <Navigation />
      <p>{article}</p>
      {/* <nav>
        <Link to="/Articles/Category/Cooking">Cooking</Link>
        <Link to="/Articles/Category/Coding">Coding</Link>
        <Link to="/Articles/Category/Football">Football</Link>
      </nav> */}
      <div className="grid">{articles.map(ArticleCard)}</div>
    </section>
  );
}

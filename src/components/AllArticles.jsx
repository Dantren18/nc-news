import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard.jsx";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((itemData) => {
      setArticles(Object.values(itemData));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <Header />
      <nav>
        <Link to="/Articles/Category/Cooking">Cooking</Link>
        <Link to="/Articles/Category/Coding">Coding</Link>
        <Link to="/Articles/Category/Football">Football</Link>
      </nav>
      <div className="grid">{articles.map(ArticleCard)}</div>
    </section>
  );
}

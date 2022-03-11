import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesbyTopic } from "../../api";
import ArticleCard from "./ArticleCard.jsx";
import Header from "../mainComponents/Header";
import Navigation from "../mainComponents/Navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ErrorPage from "../mainComponents/ErrorPage";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { genre_slug } = useParams();

  useEffect(() => {
    if (genre_slug === undefined) {
      fetchArticles()
        .then((itemData) => {
          setArticles(Object.values(itemData));
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
    } else {
      fetchArticlesbyTopic(genre_slug)
        .then((itemData) => {
          setArticles(Object.values(itemData));
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
    }
  }, [genre_slug]);

  if (isLoading)
    return (
      <p>
        Please wait, the servers are very tired and loading as fast as they can
        for you..!
      </p>
    );
  if (error) return <ErrorPage />;
  return (
    <section>
      <Header />
      <Navigation />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Select a Category to Filter:</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Articles/Category/cooking">Cooking</Nav.Link>
            <Nav.Link href="/Articles/Category/coding">Coding</Nav.Link>
            <Nav.Link href="/Articles/Category/football">Football</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="grid">{articles.map(ArticleCard)}</div>
    </section>
  );
}

import { useState, useEffect } from "react";
import {
  fetchArticles,
  fetchArticlesbyTopic,
  fetchArticlesbyOrdered,
  fetchArticlesbyTopicOrdered,
} from "../../api";
import ArticleCard from "./ArticleCard.jsx";
import Header from "../mainComponents/Header";
import Navigation from "../mainComponents/Navigation";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ErrorPage from "../mainComponents/ErrorPage";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { genre_slug } = useParams();
  const { query_string } = useParams();

  useEffect(() => {
    if (genre_slug === undefined && query_string === undefined) {
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
    } else if (genre_slug != undefined && query_string === undefined) {
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
    } else if (genre_slug === undefined && query_string != undefined) {
      fetchArticlesbyOrdered(query_string)
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
      fetchArticlesbyTopicOrdered(genre_slug, query_string)
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
  if (error) {
    console.log(error);
  }
  return (
    <section>
      <Header />
      <Navigation />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Select a Category to Filter:</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Articles/Category/cooking/">Cooking</Nav.Link>
            <Nav.Link href="/Articles/Category/coding/">Coding</Nav.Link>
            <Nav.Link href="/Articles/Category/football/">Football</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={`sort_by=created_at&order=asc`}>
                Date Ascending
              </Dropdown.Item>
              <Dropdown.Item href="sort_by=created_at&order=desc">
                Date Descending
              </Dropdown.Item>
              <Dropdown.Item href="sort_by=author&order=asc">
                Author Ascending
              </Dropdown.Item>
              <Dropdown.Item href="sort_by=author&order=desc">
                Author Descending
              </Dropdown.Item>
              <Dropdown.Item href="sort_by=votes&order=desc">
                Vote Count Ascending
              </Dropdown.Item>
              <Dropdown.Item href="sort_by=votes&order=desc">
                Vote Count Descending
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
      <div className="grid">{articles.map(ArticleCard)}</div>
    </section>
  );
}

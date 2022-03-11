import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import Header from "../mainComponents/Header";
import Navigation from "../mainComponents/Navigation";
import ErrorPage from "../mainComponents/ErrorPage";
import UserCard from "./UserCard";

export default function AllArticles() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((itemData) => {
        setUsers(Object.values(itemData));
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
  }, []);

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
      <h1>List of Users:</h1>
      <div className="grid">{users.map(UserCard)}</div>
    </section>
  );
}

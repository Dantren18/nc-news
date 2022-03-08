import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import AllUsers from "./components/AllUsers";
import ErrorPage from "./components/ErrorPage";
import SingleArticle from "./components/SingleArticle";
// import { UserContext } from "../src/UserContext";
import { useState } from "react";

function App() {
  return (
    // <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/Users" element={<AllUsers />} />
          <Route
            path="/Articles/Category/:genre_slug"
            element={<AllArticles />}
          />
          <Route path="/Articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;

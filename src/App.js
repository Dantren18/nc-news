import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllArticles from "./components/AllArticles";
import AllUsers from "./components/AllUsers";
// import { UserContext } from "../src/UserContext";
import { useState } from "react";

function App() {
  return (
    // <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/Users" element={<AllUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;

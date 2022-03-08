import axios from "axios";

const marketplaceAPI = axios.create({
  baseURL: "https://davids-nc-news-app.herokuapp.com/api",
});

const fetchArticles = () => {
  return marketplaceAPI.get("/articles").then((res) => {
    console.log(res.data.articles, "articles here");
    return res.data.articles;
  });
};

export { fetchArticles };

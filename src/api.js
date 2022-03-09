import axios from "axios";

const marketplaceAPI = axios.create({
  baseURL: "https://davids-nc-news-app.herokuapp.com/api",
});

const fetchArticles = () => {
  return marketplaceAPI.get("/articles").then((res) => {
    return res.data.articles;
  });
};

const fetchArticlesbyTopic = (topic) => {
  return marketplaceAPI.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};

const fetchArticleByID = (article_id) => {
  return marketplaceAPI.get(`/articles/${article_id}`).then((res) => {
    console.log(res.data.article, "res data");
    return res.data.article;
  });
};

const patchArticle = (article_id, votes) => {
  return marketplaceAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .catch((err) => console.log(err));
};

export { fetchArticles, fetchArticlesbyTopic, fetchArticleByID, patchArticle };

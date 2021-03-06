import axios from "axios";

const marketplaceAPI = axios.create({
  baseURL: "https://davids-nc-news-app.herokuapp.com/api"
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

const fetchArticlesbyOrdered = (query_string) => {
  return marketplaceAPI.get(`/articles?${query_string}`).then((res) => {
    return res.data.articles;
  });
};

const fetchArticlesbyTopicOrdered = (topic, query_string) => {
  return marketplaceAPI
    .get(`/articles?topic=${topic}&${query_string}`)
    .then((res) => {
      return res.data.articles;
    });
};

const fetchArticleByID = (article_id) => {
  return marketplaceAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

const patchArticle = (article_id, votes) => {
  return marketplaceAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .catch((err) => console.log(err));
};

const patchComment = (comment_id, votes) => {
  return marketplaceAPI
    .patch(`/comments/${comment_id}`, { inc_votes: votes })
    .catch((err) => console.log(err));
};

const fetchComments = (article_id) => {
  return marketplaceAPI.get(`articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

const fetchUsers = () => {
  return marketplaceAPI.get(`/users`).then((res) => {
    return res.data.users;
  });
};

const postComment = (article_id, username, body) => {
  return marketplaceAPI
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body
    })
    .then((res) => {});
};

const deleteComment = (comment_id) => {
  return marketplaceAPI
    .delete(`/comments/${comment_id}`)
    .catch((err) => console.log(err));
};

export {
  fetchArticles,
  fetchArticlesbyTopic,
  fetchArticleByID,
  patchArticle,
  fetchComments,
  fetchUsers,
  postComment,
  deleteComment,
  fetchArticlesbyOrdered,
  fetchArticlesbyTopicOrdered,
  patchComment
};

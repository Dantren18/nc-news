import { useState } from "react";
import { patchArticle } from "../../api";

import { Button, Card } from "react-bootstrap";

const ArticleVote = ({ votes, article_id }) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleClickIncrease = () => {
    setArticleVotes((currentVotes) => (currentVotes += 1));
    patchArticle(article_id, 1);
  };

  const handleClickDecrease = () => {
    setArticleVotes((currentVotes) => (currentVotes -= 1));
    patchArticle(article_id, -1);
  };

  return (
    <div>
      <Card.Subtitle className="mb-2 text-muted">
        User Score: {articleVotes}
      </Card.Subtitle>
      <Button variant="primary" onClick={handleClickDecrease}>
        Decrease Score
      </Button>{" "}
      <Button variant="primary" onClick={handleClickIncrease}>
        Increase Score
      </Button>
    </div>
  );
};

export default ArticleVote;

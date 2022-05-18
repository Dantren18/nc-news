import { Card, Button } from "react-bootstrap";
import React from "react";
import "../Box.css";
import cookingImage from "../../assets/cooking.png";
import footballImage from "../../assets/football.png";
import codingImage from "../../assets/coding.png";
import otherImage from "../../assets/question.png";
import commentImage from "../../assets/comment.png";
import thumbsUpImage from "../../assets/thumbsup.png";
import thumbsDownImage from "../../assets/thumbsdown.png";
import classes from "./ArticleComponents.module.css";
import { patchArticle } from "../../api";

const ArticleCard = (card, index) => {
  console.log(card, "card");

  let topicimage = "";
  if (card.topic === "cooking") {
    topicimage = cookingImage;
  } else if (card.topic === "football") {
    topicimage = footballImage;
  } else if (card.topic === "coding") {
    topicimage = codingImage;
  } else {
    topicimage = otherImage;
  }

  return (
    <ul key={index} className={classes.articlecard}>
      <img src={topicimage} alt="topic" className={classes.cardImage}></img>
      <span className={classes.topic}>#{card.topic}</span>
      <span className={classes.createdat}>
        {new Date(card.created_at).toLocaleDateString("en-GB")}
      </span>
      <br />
      <span className={classes.cardTitle}>{card.title}</span>
      <span className={classes.cardVotes}>
        <img
          src={thumbsDownImage}
          alt="topic"
          className={classes.voteImage}
        ></img>
        <span className={classes.votesArticle}>{card.votes}</span>
        <img
          src={thumbsUpImage}
          alt="topic"
          className={classes.voteImage}
        ></img>
      </span>
      <span className={classes.cardComments}>
        {card.comment_count}
        <img
          src={commentImage}
          alt="topic"
          className={classes.commentImage}
        ></img>
      </span>
      <br />
      <div className={classes.buttonDiv}>
        <br />
        <a
          id="myLink"
          href={`/Articles/${card.article_id}`}
          className={classes.readButton}
        >
          Read Story
        </a>
      </div>
    </ul>

    // <li key={index}>
    //     <h6 className="created_at">
    //       {new Date(article.created_at).toLocaleDateString("en-GB")}
    //     </h6>
    //     <p className='ArticleCard__title'>{card.title}</p>
    //     <p>{card.body}</p>
    //   <div className='addVote__div'>
    //   <h6 className='h6__comments'>{card.comment_count} comments</h6>
    //   <AddVote votes={card.votes} articleId={card.article_id} />
    //   </div>
    // </li>
  );

  // (

  //   <Card style={{ width: "18rem" }} key={index} className="box">
  //     {/* <Card.Img variant="top" src={topicimage} /> */}
  //     <Card.Body>
  //       <Card.Title>{card.title}</Card.Title>
  //       <Card.Text>{card.author}</Card.Text>
  //       <Card.Text>{card.created_at}</Card.Text>
  //       <Card.Text>
  //         {card.topic}, {card.votes} votes, {card.comment_count} comments
  //       </Card.Text>
  //       <Button variant="primary" href={`/Articles/${card.article_id}`}>
  //         Read
  //       </Button>
  //     </Card.Body>
  //   </Card>
  // );
};

export default ArticleCard;

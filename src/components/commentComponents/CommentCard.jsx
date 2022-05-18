import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../Box.css";
import { deleteComment } from "../../api";
import classes from "./CommentComponents.module.css";
import thumbsUpImage from "../../assets/thumbsup.png";
import deleteImage from "../../assets/delete.png";
import thumbsDownImage from "../../assets/thumbsdown.png";
import { patchComment } from "../../api";
const loggedInUser = "tickle122";

const CommentCard = (card, index) => {
  let cardVotes = card.votes;
  // const [commentVotes, setCommentVotes] = useState();
  // const deleteButton = () => {
  //   if (loggedInUser === card.author) {
  //     return (
  //       <button
  //         id="myLink"
  //         onclick={handleDelete(card.comment_id)}
  //         className={classes.deleteButton}
  //       >
  //         Delete
  //       </button>
  //     );
  //   }
  // };

  const handleClickIncrease = () => {
    console.log("increase click");
    cardVotes = cardVotes + 1;
    patchComment(card.comment_id, 1);
  };

  const handleClickDecrease = () => {
    cardVotes = cardVotes - 1;
    patchComment(card.comment_id, -1);
  };

  const handleDelete = (comment_id) => {
    console.log("inside delete");
    deleteComment(comment_id);
  };

  return (
    <div key={index} className={classes.commentCard}>
      <span className={classes.commentAuthor}>{card.author}</span>
      <span className={classes.createdat}>
        {new Date(card.created_at).toLocaleDateString("en-GB")}
      </span>
      <span className={classes.createdat}>
        {" "}
        <img
          src={thumbsDownImage}
          alt="topic"
          className={classes.voteImage}
          onClick={handleClickDecrease}
        ></img>
        {cardVotes}
        <img
          src={thumbsUpImage}
          alt="topic"
          className={classes.voteImage}
          onClick={handleClickIncrease}
        ></img>
      </span>
      <p>{card.body}</p>
      {loggedInUser === card.author ? (
        <div className={classes.buttonDiv}>
          <img
            src={deleteImage}
            alt="topic"
            className={classes.deleteImage}
            onClick={handleDelete(card.comment_id)}
          ></img>
        </div>
      ) : null}
    </div>
  );
};

export default CommentCard;

import { Card, Button } from "react-bootstrap";
import React from "react";
import "../Box.css";
import { deleteComment } from "../../api";
const loggedInUser = "tickle122";

const CommentCard = (card, index) => {
  const deleteButton = () => {
    if (loggedInUser === card.author) {
      return (
        <Button onclick={handleDelete(card.comment_id)}>
          Delete Your Comment
        </Button>
      );
    }
  };

  const handleDelete = (comment_id) => {
    deleteComment(comment_id);
  };

  return (
    <Card style={{ width: "18rem" }} key={index} className="box">
      <Card.Body>
        <Card.Title>
          Comment by: {card.author}. Written at {card.created_at}. Score:{" "}
          {card.votes}
        </Card.Title>
        <Card.Text>{card.body}</Card.Text>
        {deleteButton()}
      </Card.Body>
    </Card>
  );
};

export default CommentCard;

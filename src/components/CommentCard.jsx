import { Card, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { getComments } from "../api";
import React from "react";
import "./Box.css";

const CommentCard = (card, index) => {
  return (
    <Card style={{ width: "18rem" }} key={index} className="box">
      <Card.Body>
        <Card.Title>
          Comment by: {card.author}. Written at {card.created_at}. Score:{" "}
          {card.votes}
        </Card.Title>
        <Card.Text>{card.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;

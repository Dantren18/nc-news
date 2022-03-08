import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./Box.css";
import cookingImage from "../assets/cooking.png";
import footballImage from "../assets/football.png";
import codingImage from "../assets/coding.png";

const renderCard = (card, index) => {
  if (card.topic === "cooking") {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={cookingImage} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.author}</Card.Text>
          <Card.Text>{card.created_at}</Card.Text>
          <Card.Text>
            {card.topic}, {card.votes} votes, {card.comment_count} comments
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    );
  } else if (card.topic === "football") {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={footballImage} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.author}</Card.Text>
          <Card.Text>{card.created_at}</Card.Text>
          <Card.Text>
            {card.topic}, {card.votes} votes, {card.comment_count} comments
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    );
  } else if (card.topic === "coding") {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={codingImage} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.author}</Card.Text>
          <Card.Text>{card.created_at}</Card.Text>
          <Card.Text>
            {card.topic}, {card.votes} votes, {card.comment_count} comments
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    );
  }
};

export default renderCard;

import { Card, Button } from "react-bootstrap";
import { React } from "react";
import "../Box.css";
const loggedInUser = "tickle122";

const UserCard = (card, index) => {
  return (
    <Card style={{ width: "18rem" }} key={index} className="box">
      <Card.Body>
        <Card.Title>Username: {card.username}</Card.Title>
        <Button variant="primary">Login</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

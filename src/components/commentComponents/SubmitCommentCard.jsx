import { useState } from "react";
import { postComment } from "../../api";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./CommentComponents.module.css";
const loggedInUser = "tickle122";

export default function SubmitCommentCard() {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const [placeholderText, setplaceHolderText] = useState(
    "Type your comment here"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment === "") {
      setplaceHolderText("You must type some text before submitting!");
      return;
    }
    postComment(article_id, loggedInUser, newComment);
    setNewComment("");
    setplaceHolderText("Your comment has been posted! Refresh to view it");
  };

  return (
    <div className={classes.submitComment}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={placeholderText}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

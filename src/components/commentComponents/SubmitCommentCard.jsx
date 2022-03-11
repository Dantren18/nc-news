import { useState } from "react";
import { postComment } from "../../api";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
const loggedInUser = "tickle122";

export default function SubmitCommentCard() {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const [placeholderText, setplaceHolderText] = useState(
    "Type your comment here"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, loggedInUser, newComment);
    setNewComment("");
    setplaceHolderText("Your comment has been posted! Refresh to view it");
  };

  return (
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
  );
}

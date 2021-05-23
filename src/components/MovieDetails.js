import {
  Modal,
  Button,
  ListGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import { useState } from 'react';
import { addComment } from '../services';
export const MovieDetails = (props) => {
  const { movie } = props;
  const [inputVal, changeVal] = useState('');

  const postComment = (movieId, comment) => {
    addComment({
      movieId,
      comment
    }).then(() => {
      changeVal('');
      props.onHide();
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Movie Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{movie.name}</h4>
        <p>Description: {movie.description}</p>
        <p>Ticket price: {movie.ticketPrice}</p>
        <p>Movie Picture <img src={`http://3.108.14.110/uploads/${movie.moviePhoto}`} className="card-img-top" alt="{item.moviePhoto}" width="193" height="130" /> </p>
        <p>Release date: {movie.releaseDate}</p>
        <p>Genre: {movie?.genre?.join(', ')}</p>
        {!!movie?.comments?.length && <p>Comments:</p>}
        <ListGroup>
          {movie?.comments?.map((comment, i) => {
            return (
              <ListGroup.Item key={i}>
                <p>Comment: {comment.comment}</p>
                <p>By: {comment.userId?.email} </p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <InputGroup className="mb-3 mt-3">
          <FormControl
            aria-label="Comment"
            onChange={(e) => changeVal(e.target.value)}
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={() => postComment(movie._id, inputVal)}
            >
              Add comment
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

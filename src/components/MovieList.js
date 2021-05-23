import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { MovieDetails } from '../components';
import { getMovies } from '../services';
export const MovieList = ({ movies }) => {
  const [modal, toggleModal] = useState(false);
  const [movie, setMovie] = useState({});
  const showMovieDetails = (slug) => {
    console.log(slug);
    getMovies(slug)
      .then((res) => res.data)
      .then(({ data }) => {
        setMovie(data);
        toggleModal(true);
      });
  };

  return (
    <>
      <ListGroup className="mb-5">
        {movies.map((movie, i) => {
          return (
            <ListGroup.Item
              action
              key={i}
              onClick={() => showMovieDetails(movie.movieSlug)}
            >
              <h3>{movie.name}</h3>
              <p className="fw-light">{movie.description}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <MovieDetails
        show={modal}
        movie={movie}
        onHide={() => toggleModal(false)}
      />
    </>
  );
};

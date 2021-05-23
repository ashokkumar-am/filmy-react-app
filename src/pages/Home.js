import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Header, MovieList, AddMovie } from '../components';
import { useHistory } from 'react-router-dom';
import { getMovies, cookie, deleteSession } from '../services';
import { ToastContainer } from 'react-toastify';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [addModal, toggleAddModal] = useState(false);

  const history = useHistory();
  useEffect(() => {
    getMovies()
      .then((res) => res.data)
      .then(({ data }) => {
        setMovies(data);
      });
  }, []);

  const logout = () => {
    deleteSession();
    history.push('/');
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Header heading="Movie Collections" />
          </Col>
          <Col xs={12} className="mt-5 mb-5">
            <Row>
              <Col>Welcome {cookie('email')}</Col>
              <Col className="text-right">
                <Button
                  variant="outline-info mr-3"
                  onClick={() => toggleAddModal(true)}
                >
                  Add movie
                </Button>
                <Button variant="outline-danger" onClick={() => logout()}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 8, offset: 2 }}>
            <MovieList movies={movies} />
          </Col>
        </Row>
      </Container>
      <AddMovie show={addModal} onHide={() => toggleAddModal(false)} />
      <ToastContainer />
    </>
  );
};

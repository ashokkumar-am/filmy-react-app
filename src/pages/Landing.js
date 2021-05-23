import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Header, LandingForm } from '../components';
import { cookie } from '../services';
import { ToastContainer } from 'react-toastify';


export const Landing = () => {
  const history = useHistory();

  useEffect(() => {
    if (cookie('session_token')) {
      history.push('/home');
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Header heading="Welcome to filmy" />
          </Col>
          <Col xs={{ span: 6, offset: 3 }}>
            <LandingForm />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

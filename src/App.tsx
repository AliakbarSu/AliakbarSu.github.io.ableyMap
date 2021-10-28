import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm="12">
          </Col>
        </Row>
      </Container>
      <footer className="footer fixed-bottom">

            <Footer />
      </footer>
    </div>
  );
}

export default App;

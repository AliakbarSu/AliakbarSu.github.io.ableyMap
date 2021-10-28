import React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
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

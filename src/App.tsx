import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Map from './components/Map/Map';
import './App.scss';
import { useAppSelector } from './store/hooks'
import Loader from './components/Loader/Loader'


const App: React.FC = () => {
  const loading = useAppSelector((state) => state.UI.loading)
  return (
    <div className="App">
      {loading && <Loader/>}
      <Header/>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Map/>
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

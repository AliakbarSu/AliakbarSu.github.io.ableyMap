import React from 'react'
import './footer.scss'
import { Container, Row, Col } from 'react-bootstrap'



const Footer: React.FC = () => {
    return (
        <Container fluid className="bottom_footer">
            <Row>
                <Col>
                    <p className="bottom_footer-copyrightText">2021 - All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    )
}



export default Footer

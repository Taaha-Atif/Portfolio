import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"
export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col s={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/taaha-atif/"><img src={navIcon1} alt = "linkedin icon" /></a>
                            
                        </div>
                        <p>CopyRight 2026. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
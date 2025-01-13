import { Col, Container, Row } from "reactstrap";
import "./HomeView.css"

export const HomeView = () => {
    return (
        <Container>
            {/* Heading Banner */}
            <Row className="my-4">
                <Col>
                    <div className="p-5 bg-primary text-white text-center border border-danger border-thick">
                        <h1>Welcome to the Galvadia Bestiary!</h1>
                    </div>
                </Col>
            </Row>

            {/* Body Element */}
            <Row className="my-4">
                <Col>
                    <div className="p-4 bg-light text-dark">
                        <h2>Welcome, User!</h2>
                        <p>
                            
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
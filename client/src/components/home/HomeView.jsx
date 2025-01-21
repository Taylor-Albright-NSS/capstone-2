import { Card, CardImg, Col, Container, Row } from "reactstrap";
import "./HomeView.css"

export const HomeView = () => {
    return (
        <Container>
            {/* Heading Banner */}
            {/* <Row className="my-4">
                <Col>
                    <div className="p-5 bg-primary text-white text-center border border-danger border-thick">
                        <h1>Welcome to the Galvadia Bestiary!</h1>
                    </div>
                </Col>
            </Row> */}

            {/* Body Element */}
            <Row>
                <Col className="d-flex justify-content-center align-items-center" style={{marginTop: "8rem"}}>
                    <Card className="welcome p-4 d-flex justify-content-center align-items-center" style={{maxWidth: "800px", minHeight: "400px"}}>
                        {/* <div src="public/assets/images/icons/Galvadia Banner.png" style={{backgroundSize: "cover", backgroundImage: "url('public/assets/images/icons/Galvadia Banner.png')", minidth: "200px", minHeight: "200px"}}></div> */}
                        <h1 className="gold">Welcome To The Galvadia Bestiary</h1>
                        <CardImg src="public/assets/images/icons/Galvadia Banner.png" style={{maxWidth: "250px", height: "auto"}} />

                        <p className="my-5" style={{color: "white", fontWeight: "100", width: "400px", textIndent: "20px", textAlign: "center"}}>
                            {`The Galvadia Armory is an interactive application to create enemies for Galvadia. You can also test out your character's damage against any monster!`}
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
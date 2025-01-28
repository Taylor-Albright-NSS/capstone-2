import { Card, CardImg, Col, Container, Row } from "reactstrap";
import "./HomeView.css"

export const HomeView = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center" style={{marginTop: "4rem"}}>
                    <Card className="welcome p-4 d-flex justify-content-center align-items-center" style={{maxWidth: "800px", minHeight: "400px", border: "6px ridge grey"}}>
                        {/* <div src="public/assets/images/icons/Galvadia Banner.png" style={{backgroundSize: "cover", backgroundImage: "url('public/assets/images/icons/Galvadia Banner.png')", minidth: "200px", minHeight: "200px"}}></div> */}
                        <h1 className="gold">Welcome To The Galvadia Bestiary</h1>
                        <CardImg src="assets/images/icons/Galvadia Banner.png" style={{maxWidth: "250px", height: "auto"}} />

                        <p className="my-5 translate-test" style={{color: "white", fontWeight: "100", width: "400px", textIndent: "20px", textAlign: "center"}}>
                            The Galvadia <mark>Armory</mark> is an interactive application to create enemies for Galvadia. You can also test out your characters damage against any monster!
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
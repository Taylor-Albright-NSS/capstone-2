import { Card, CardBody, CardText, CardTitle, Container } from "reactstrap"

export const EnemyCard = () => {
    return (
        <Container style={{width: "200px"}}>
            <Card>
                <CardBody>
                    <CardTitle tag="h4">Enemy Name</CardTitle>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Container>
    )
}
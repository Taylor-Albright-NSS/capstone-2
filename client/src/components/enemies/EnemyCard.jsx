import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Container } from "reactstrap"

export const EnemyCard = ({ enemy }) => {
    const { id } = enemy
    const navigate = useNavigate()
    console.log(enemy.image.imageLocation)
    return (
        <Container onClick={() => navigate(`${id}`)} style={{cursor: "pointer", width: "200px"}}>
            <Card>
                <CardBody className="d-flex flex-column align-items-center">
                    <CardImg src={enemy.image.imageLocation} />
                    <CardTitle tag="h4">{enemy.name}</CardTitle>
                </CardBody>
            </Card>
        </Container>
    )
}
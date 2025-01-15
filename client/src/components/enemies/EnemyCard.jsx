import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardImg, CardTitle, Container } from "reactstrap"
import { deleteEnemy, getEnemies } from "../../managers/enemyManager"

export const EnemyCard = ({ enemy, setEnemies }) => {
    const { id } = enemy
    const navigate = useNavigate()
    const handleEnemyDelete = () => {
        deleteEnemy(id).then(() => {
            getEnemies().then(enemies => {
                console.log(enemies)
                setEnemies(enemies)
            })
        })
    }

    return (
        <Container >
            <Card onClick={() => navigate(`${id}`)} style={{cursor: "pointer", width: "200px"}}>
                <CardBody className="d-flex flex-column align-items-center">
                    <CardImg src={enemy.image.imageLocation} />
                    <CardTitle tag="h4">{enemy.id}: {enemy.name}</CardTitle>
                </CardBody>
            </Card>
            <Button onClick={handleEnemyDelete}>Delete Enemy</Button>
        </Container>
    )
}
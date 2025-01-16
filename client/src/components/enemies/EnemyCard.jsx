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
                    <CardTitle tag="h4"><span style={{fontSize: "12px"}}>Id: {enemy.id}</span>{enemy.name}</CardTitle>
                </CardBody>
            </Card>
            <div>
                <Button style={{width: "100px", fontSize: "12px"}} onClick={handleEnemyDelete}>Delete Enemy</Button>
                <Button style={{width: "100px", fontSize: "12px"}} onClick={() => navigate(`edit/${id}`)}>Edit</Button>
            </div>
        </Container>
    )
}
import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardImg, CardTitle, Container } from "reactstrap"
import { deleteEnemy, getEnemies } from "../../managers/enemyManager"
import { useContext } from "react"
import { UserContext } from "../ApplicationViews"

export const EnemyCard = ({ enemy, setEnemies }) => {
    const { id } = enemy
    const navigate = useNavigate()
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const handleEnemyDelete = () => {
        deleteEnemy(id, userId).then(() => {
            getEnemies().then(enemies => {
                setEnemies(enemies)
            })
        })
    }
    

    return (
        <Container >
            <Card style={{maxWidth: "200px"}}>
                <CardBody onClick={() => navigate(`${id}`)} style={{cursor: "pointer"}} className="d-flex flex-column align-items-center">
                    <CardTitle tag="h5">{enemy?.name}</CardTitle>
                    <CardImg src={enemy?.image?.imageLocation} />
                </CardBody>
            <div className="d-flex justify-content-evenly my-1">
                {loggedInUser?.id == enemy?.userId && <Button color="danger" style={{width: "90px", fontSize: "12px"}} onClick={handleEnemyDelete}>Delete</Button>}
                {loggedInUser?.id == enemy?.userId && <Button color="warning" style={{width: "90px", fontSize: "12px"}} onClick={() => navigate(`edit/${id}`)}>Edit</Button>}
            </div>
            </Card>
        </Container>
    )
}
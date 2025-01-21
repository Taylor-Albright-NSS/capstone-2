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
            <Card className="mx-2 my-2" style={{maxWidth: "200px"}}>
                <CardBody onClick={() => navigate(`${id}`)} style={{cursor: "pointer"}} className="d-flex flex-column align-items-center">
                    <CardTitle tag="h5">{enemy.name}</CardTitle>
                    {/* <CardImg src={enemy.imageUrl} /> */}
                    <Card style={{width: "100px", minHeight: "100px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${enemy.imageUrl})`}} />
                </CardBody>
                <div className="d-flex justify-content-evenly my-1">
                    <Button color="danger" style={{width: "75px", fontSize: "12px"}} onClick={handleEnemyDelete}>Delete</Button>
                    <Button color="warning" style={{width: "75px", fontSize: "12px"}} onClick={() => navigate(`edit/${id}`)}>Edit</Button>
                </div>
            </Card>
    )
}
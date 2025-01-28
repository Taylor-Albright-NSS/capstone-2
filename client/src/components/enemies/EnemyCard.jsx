import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Container } from "reactstrap"
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
            getEnemies().then(updatedEnemies => {
                console.log(updatedEnemies, " UPDATED ENEMIES")
                setEnemies(updatedEnemies)
            })
        })
    }

    return (
            <Card className="border-test mx-4 my-4 enemy-card" style={{maxWidth: "200px", maxHeight: "260px"}}>
                <CardBody className="d-flex flex-column align-items-center">
                    <CardTitle className="" tag="h5" style={{textAlign: "center"}}>{enemy.name}</CardTitle>
                    {/* <CardImg src={enemy.imageUrl} /> */}
                    <Card onClick={() => navigate(`${id}`)} className="mb-2" style={{border: "4px ridge grey", cursor: "pointer", width: "100px", minHeight: "100px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${enemy.imageUrl})`}} />
                    <span className="d-flex flex-column align-items-center">
                        <h6 style={{margin: 0}}>Level</h6>
                        <p style={{margin: 0, color: "white"}}>{enemy?.minLevel} - {enemy?.maxLevel}</p>
                    </span>
                    <span className="d-flex justify-content-evenly my-1">
                        {(loggedInUser.roles.includes("Admin")) && <button color="danger" style={{width: "90px", fontSize: "12px"}} onClick={handleEnemyDelete}>Delete</button>}
                        {(loggedInUser.roles.includes("Admin")) && <button color="warning" style={{width: "90px", fontSize: "12px"}} onClick={() => navigate(`edit/${id}`)}>Edit</button>}
                    </span>
                </CardBody>
            </Card>
    )
}
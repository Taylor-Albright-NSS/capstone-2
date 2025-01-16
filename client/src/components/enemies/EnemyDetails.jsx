import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEnemy, getEnemies, getEnemy } from "../../managers/enemyManager";
import { Button, CardImg, Col, Container, Row } from "reactstrap";
import { getItems } from "../../managers/itemManager";

export const EnemyDetails = () => {
    const [enemy, setEnemy] = useState()
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    useEffect(() => {
        getEnemy(id).then(enemy => {
            console.log(enemy)
            setEnemy(enemy)
        })
    }, [id])

    const handleEnemyDelete = () => {
        deleteEnemy(id).then(() => {
            navigate("/enemy-list")
        })
    }
    
    return (
        <Container style={{border: "2px solid black"}}>
            <h3>Enemy Details Page</h3>
            <Row>
                {/* Left side column */}
                <Col>
                    <Row>
                        <div className="container" style={{ maxWidth: "400px" }}>
                            <h1>{enemy?.name}</h1>
                            <img src={`${enemy?.image?.imageLocation}`} alt={enemy?.name} />
                            <p style={{marginBottom: 0}}>Level range: {enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                        </div>
                    </Row>
                    <Row>
                            <h3>Details</h3>
                        <Col style={{border: "2px solid green"}}>
                            <p style={{marginBottom: 0}}>Type: Elemental (this is hard coded)</p>
                            <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                            <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                            <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                            <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                        </Col>
                        <Col style={{border: "2px solid black"}}>
                            <p style={{marginBottom: 0}}>Slashing Attack?: {enemy?.slashingDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>Piercing Attack?: {enemy?.piercingDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>Blunt Attack?: {enemy?.bluntDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>PLACEHOLDER FOR ABILITIES</p>
                        </Col>
                        <Row style={{border: "2px solid red"}}>
                            <p style={{marginBottom: 0}}>Base experience: {enemy?.baseExperience}</p>
                            <p style={{marginBottom: 0}}>Base gold: (this is hard coded){enemy?.baseExperience}</p>

                            <h6>Item drops</h6>
                            {enemy?.items.length > 0 ?
                            enemy.items.map(item => {
                                return (
                                    <p style={{marginBottom: 0}} key={item.id}>{item.name}</p>
                                )
                            })
                            : "Does not drop any items"}
                            <p style={{marginBottom: 0}}>Description: {enemy?.description || "Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder "}</p>
                        </Row>
                    </Row>



                </Col>

                {/* Right side column */}
                <Col>
                    <div className="container" style={{ maxWidth: "500px" }}>
                        <h3>Enemy Stats information</h3>
                    </div>
                </Col>
            </Row>
            <Button color="danger" onClick={handleEnemyDelete}>Delete Enemy</Button>
            <Button color="warning" onClick={() => navigate(`../edit/${id}`)}>Edit enemy</Button>
            <Button color="primary" onClick={() => navigate("/enemy-list")}>Go Back</Button>
        </Container>
    );
}
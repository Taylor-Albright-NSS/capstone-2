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
        <Container>
            <h3>Enemy Details Page</h3>
            <Button onClick={() => navigate(`../edit/${id}`)}>Edit enemy</Button>
            <Button onClick={() => navigate("/enemy-list")}>Go Back</Button>

            <Row>
                {/* Left side column */}
                <Col>
                    <Row>
                        <div className="container" style={{ maxWidth: "500px" }}>
                            <h1>name: {enemy?.name}</h1>
                            <img src={`${enemy?.image?.imageLocation}`} alt={enemy?.name} />
                        </div>
                    </Row>
                    <Row>
                            <h3>Details</h3>
                        <Col>
                            <p style={{marginBottom: 0}}>Level range: {enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                            <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                            <p style={{marginBottom: 0}}>Base experience: {enemy?.baseExperience}</p>
                            <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                            <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                            <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                            <p style={{marginBottom: 0}}>Description: {enemy?.description}</p>
                        </Col>
                        <Col>
                            <p style={{marginBottom: 0}}>Slashing Attack?: {enemy?.slashingDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>Piercing Attack?: {enemy?.piercingDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>Blunt Attack?: {enemy?.bluntDamage ? "Yes" : "No"}</p>
                            <p style={{marginBottom: 0}}>PLACEHOLDER FOR ABILITIES</p>
                            <p style={{marginBottom: 0}}>Description: {enemy?.description}</p>
                        </Col>
                        <Row className="d-flex ">
                            <h6>Item drops</h6>
                            {enemy?.items.length > 0 ?
                            enemy.items.map(item => {
                                return (
                                    <p style={{marginBottom: 0}} key={item.id}>{item.name}</p>
                                )
                            })
                            : "Does not drop any items"}
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
            <Button onClick={handleEnemyDelete}>Delete Enemy</Button>
        </Container>
    );
}
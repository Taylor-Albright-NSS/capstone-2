import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEnemy, getEnemies, getEnemy } from "../../managers/enemyManager";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";
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
            <Row>
                {/* Left side column */}
                <Col style={{maxWidth: "500px"}}>
                    <Row className="d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center" style={{ maxWidth: "400px" }} >
                            <h1>{enemy?.name}</h1>
                            <img style={{maxWidth: "100px"}} src={`${enemy?.image?.imageLocation}`} alt={enemy?.name} />
                                <p style={{marginBottom: 0}}>Level range: {enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                                <p style={{marginBottom: 0}}>Elemental</p>
                                {/* <p style={{marginBottom: 0}}>^ elemental is hard coded. Need to add type property to enemies</p> */}
                        </div>
                    </Row>
                    <Row style={{border: "2px solid green"}}>
                        <Col >
                            <Row>
                                <Col>
                                <h5 style={{textAlign: "center"}}>Defense</h5>
                                <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                                <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                                <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                                <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                                <h5 style={{textAlign: "center"}}>Magic Defense</h5>
                                <p style={{marginBottom: 0}}>Magic res: 0</p>
                                <p style={{marginBottom: 0}}>Magic res: 0</p>
                                <p style={{marginBottom: 0}}>Magic res: 0</p>
                                <p style={{marginBottom: 0}}>Magic res: 0</p>
                                </Col>
                                <Col style={{textAlign: "center"}}>
                                <h5 style={{textAlign: "center"}}>Offense</h5>
                                <p>Base Damage: {enemy?.baseDamage}</p>
                                <h6 className="my-2">Damage Types</h6>
                                {enemy?.slashingDamage && <p style={{marginBottom: 0}}>Slashing</p>}
                                {enemy?.piercingDamage && <p style={{marginBottom: 0}}>Piercing</p>}
                                {enemy?.bluntDamage && <p style={{marginBottom: 0}}>Blunt</p>}
                                <h6 className="my-2">Abilities</h6>
                                </Col>
                            </Row>
                            <Row style={{border: "2px solid red"}}>
                                <h5 style={{textAlign: "center"}}>Extra</h5>
                                <p style={{marginBottom: 0}}>Base experience: {enemy?.baseExperience}</p>
                                <p style={{marginBottom: 0}}>Base gold: (this is hard coded){enemy?.baseExperience}</p>
                                <span className="d-flex">
                                    <h6>Item drops:</h6>
                                    {enemy?.items.length > 0 ?
                                        enemy.items.map(item => {
                                            return (
                                                <p style={{marginBottom: 0, marginLeft: "4px"}} key={item.id}>{item.name}</p>
                                            )
                                        })
                                        : "Does not drop any items"
                                        }
                                </span>
                                <span>
                                    <h6 style={{textAlign: "center"}}>Description</h6>
                                    <p style={{marginBottom: 0}}>{enemy?.description || "Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder "}</p>
                                </span>
                            </Row>
                        </Col>
                    </Row>
                    <Button color="danger" onClick={handleEnemyDelete}>Delete Enemy</Button>
                    <Button color="warning" onClick={() => navigate(`../edit/${id}`)}>Edit enemy</Button>
                    <Button color="primary" onClick={() => navigate("/enemy-list")}>Go Back</Button>
                </Col>

                {/* Right side column */}
                <Col className="d-flex justify-content-center align-items-center" style={{border: "2px solid black"}}>
                    <Card className="justify-content-center align-items-center" style={{minWidth: "300px", minHeight: "300px"}}>
                        <h3>Simulator </h3>
                        <p>Coming in a future update!</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
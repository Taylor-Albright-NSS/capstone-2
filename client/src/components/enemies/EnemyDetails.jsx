import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEnemy, getEnemies, getEnemy } from "../../managers/enemyManager";
import { Button, Card, CardBody, CardImg, CardText, Col, Container, Row } from "reactstrap";
import { getItems } from "../../managers/itemManager";
import { Simulator } from "./Simulator";

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
                            <h3>{enemy?.name}</h3>
                            <img style={{maxWidth: "100px"}} src={`${enemy?.image?.imageLocation}`} alt={enemy?.name} />
                                <p style={{marginBottom: 0}}>Level range: {enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                                <p style={{marginBottom: 0}}>Experience Range: {enemy?.baseExperience}</p>
                                <p style={{marginBottom: 0}}>Gold Range: {enemy?.minGold + " - " + enemy?.maxGold}</p>
                                {/* <p style={{marginBottom: 0}}>^ elemental is hard coded. Need to add type property to enemies</p> */}
                        </div>
                    </Row>
                    <Row style={{border: "2px solid green"}}>
                        <Col >
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    <Card style={{height: "100%"}}>
                                        <h5 style={{textAlign: "center"}}>Offense</h5>
                                        <p>Base Damage: {enemy?.baseDamage}</p>
                                        <p>Accuracy: {enemy?.accuracyRating}</p>
                                        <h6 className="my-2">Damage Types</h6>
                                        {enemy?.slashingDamage && <p style={{marginBottom: 0}}>Slashing</p>}
                                        {enemy?.piercingDamage && <p style={{marginBottom: 0}}>Piercing</p>}
                                        {enemy?.bluntDamage && <p style={{marginBottom: 0}}>Blunt</p>}
                                        <h6 className="my-2">Abilities</h6>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <h5 style={{textAlign: "center"}}>Defense</h5>
                                        <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                                        <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                                        <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                                        <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                                        <p style={{marginBottom: 0}}>Dodge: {enemy?.dodgeRating}</p>
                                    </Card>
                                    <Card>
                                        <h5 style={{textAlign: "center"}}>Magic Resist</h5>
                                        <p style={{marginBottom: 0}}>Fire Resist: {enemy?.fireResist}</p>
                                        <p style={{marginBottom: 0}}>Ice Resist: {enemy?.iceResist}</p>
                                        <p style={{marginBottom: 0}}>Lightning Resist: {enemy?.lightningResist}</p>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Card>

                                <div className="d-flex flex-column align-items-center">
                                    <h6>Item drops</h6>
                                    <ul>
                                    {enemy?.items.length > 0 ?
                                        enemy.items.map((item, i) => {
                                            i = i + 1
                                            return (
                                                <li style={{listStyleType: "none", marginBottom: 0, marginLeft: "4px"}} key={item.id}>{i}. {item.name}</li>
                                            )
                                        })
                                        : "Does not drop any items"
                                        }

                                    </ul>
                                </div>
                                <span className="d-flex flex-column align-items-center">
                                    <h6 style={{textAlign: "center"}}>Description</h6>
                                    <Card className="align-items-center" style={{maxWidth: "400px", minWidth: "200px"}}>
                                        <CardBody>

                                        {enemy?.description || "This is an enemy that has not yet been given a description"}
                                        </CardBody>
                                    </Card>
                                </span>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                    <Button color="danger" onClick={handleEnemyDelete}>Delete Enemy</Button>
                    <Button color="warning" onClick={() => navigate(`../edit/${id}`)}>Edit enemy</Button>
                    <Button color="primary" onClick={() => navigate("/enemy-list")}>Go Back</Button>
                </Col>

                {/* Right side column */}
                <Col className="d-flex justify-content-center align-items-center" style={{border: "2px solid black"}}>
                    <Simulator />
                </Col>
            </Row>
        </Container>
    );
}
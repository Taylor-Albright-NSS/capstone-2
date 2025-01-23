import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEnemy, getEnemies, getEnemy } from "../../managers/enemyManager";
import { Button, Card, CardBody, CardImg, CardText, Col, Container, Row } from "reactstrap";
import { getItems } from "../../managers/itemManager";
import { Simulator } from "./Simulator";
import { UserContext } from "../ApplicationViews";

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

    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
	const handleEnemyDelete = () => {
        deleteEnemy(id, userId).then(() => {
            navigate("/enemy-list")
        })
    }

    
    
    return (
        <Container>
            <Row>
                {/* Left side column */}
                <Col className="granite-background" style={{maxWidth: "500px", border: "6px ridge grey"}}>
                    <Row className="d-flex justify-content-center">
                    <Button style={{width: "150px"}} color="primary" onClick={() => navigate("/enemy-list")}>Go Back</Button>
                        <div className="d-flex flex-column align-items-center" style={{ maxWidth: "400px" }} >
                            <h3>{enemy?.name}</h3>
                            <img style={{maxWidth: "200px"}} src={`${enemy?.imageUrl}`} alt={enemy?.name} />
                            <Card>
                                <p style={{marginBottom: 0}}>Level range: {enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                                <p style={{marginBottom: 0}}>Base Experience: {enemy?.baseExperience}</p>
                                <p style={{marginBottom: 0}}>Gold Range: {enemy?.minGold + " - " + enemy?.maxGold}</p>
                                {/* <p style={{marginBottom: 0}}>^ elemental is hard coded. Need to add type property to enemies</p> */}
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <Col >
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    <Card style={{border: "4px ridge grey", height: "100%"}}>
                                        <h5 style={{textAlign: "center"}}>Offense</h5>
                                        <p>Attack Power: {enemy?.attackPower}</p>
                                        <h6 className="my-2 fw-bold">Damage Types</h6>
                                        {enemy?.slashingDamage && <p style={{marginBottom: 0}}>Slashing</p>}
                                        {enemy?.piercingDamage && <p style={{marginBottom: 0}}>Piercing</p>}
                                        {enemy?.bluntDamage && <p style={{marginBottom: 0}}>Blunt</p>}
                                        {/* <h6 className="my-2 fw-bold">Abilities</h6> */}
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{border: "4px ridge grey"}}>
                                        <h5 style={{textAlign: "center"}}>Defense</h5>
                                        <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                                        <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                                        <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                                        <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                                    </Card>
                                    <Card style={{border: "4px ridge grey"}}>
                                        <h5 style={{textAlign: "center"}}>Magic Resist</h5>
                                        <p style={{marginBottom: 0}}>Fire Resist: {enemy?.fireResist}</p>
                                        <p style={{marginBottom: 0}}>Ice Resist: {enemy?.iceResist}</p>
                                        <p style={{marginBottom: 0}}>Lightning Resist: {enemy?.lightningResist}</p>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Card>

                                <div className="d-flex flex-column align-items-center" style={{border: "4px ridge grey"}}>
                                    <h6>Item drops</h6>
                                    <ul style={{maxHeight: "80px", overflow: "hidden", overflowY: "auto"}}>
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
                                    <Card style={{maxWidth: "400px", minWidth: "200px", height: "100px", border: "4px ridge grey"}}>
                                        <CardBody style={{overflow: "hidden", overflowY: "auto"}}>
                                        {enemy?.description || "This is an enemy that has not yet been given a description"}
                                        </CardBody>
                                    </Card>
                                </span>
                                <span style={{textAlign: "center"}}>
                                    {loggedInUser?.id == enemy?.userId && <Button color="danger" onClick={handleEnemyDelete}>Delete Enemy</Button>}
                                    {loggedInUser?.id == enemy?.userId && <Button color="warning" onClick={() => navigate(`../edit/${id}`)}>Edit enemy</Button>}
                                </span>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* Right side column */}
                <Col className="granite-background d-flex justify-content-center" style={{backdropFilter: "blur(10px)", marginLeft: "1rem", border: "6px ridge grey"}}>
                    <Simulator />
                </Col>
            </Row>
        </Container>
    );
}
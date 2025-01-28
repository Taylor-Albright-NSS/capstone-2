import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteEnemy, getEnemies, getEnemy } from "../../managers/enemyManager";
import { Card, CardBody, CardImg, CardText, Col, Container, Row } from "reactstrap";
import { getItems } from "../../managers/itemManager";
import { Simulator } from "./Simulator";
import { UserContext } from "../ApplicationViews";

export const EnemyDetails = () => {
    const [enemy, setEnemy] = useState()
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id

    
    useEffect(() => {
        getEnemy(id).then(enemy => {
            console.log(enemy)
            setEnemy(enemy)
        })
    }, [id])

    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState()
    useEffect(() => {
        setCurrentLocation(location)
    }, [location])

    useEffect(() => {
        console.log(location, " LOCAION")
    }, [location])


    const handleEnemyDelete = () => {
        deleteEnemy(id, userId).then(() => {
            navigate("/enemy-list")
        })
    }
    const from = location?.state?.from || false
    return (
        <Container>
            <Row>
                {/* Left side column */}
                <Col className="granite-background" style={{maxWidth: "500px", border: "6px ridge grey"}}>
                    <Row className="d-flex justify-content-center">
                    <button style={{width: "150px"}} className="my-2" onClick={() => {
                            if (from) {
                                navigate(from)
                            } else {
                                navigate("/enemy-list")
                            }
                        }}>Go Back</button>
                        <div className="d-flex flex-column align-items-center" style={{ maxWidth: "400px" }} >
                            <h3>{enemy?.name}</h3>
                            <img className="my-2" style={{width: "100%", maxWidth: "200px", height: "100%", maxHeight: "200px", border: "6px ridge grey"}} src={`${enemy?.imageUrl}`} alt={enemy?.name} />
                            <Card style={{border: "4px ridge grey", padding: "0.5rem", marginBottom: "0.5rem"}}>
                                <span className="d-flex align-items-center">
                                    <h6 style={{marginBottom: 0}}>Level range:</h6>
                                    <p style={{marginBottom: 0, marginLeft: "0.5rem"}}>{enemy?.minLevel + " - " + enemy?.maxLevel}</p>
                                </span>
                                <span className="d-flex align-items-center">
                                    <h6 style={{marginBottom: 0}}>Base Experience:</h6>
                                    <p style={{marginBottom: 0, marginLeft: "0.5rem"}}>{enemy?.baseExperience}</p>
                                </span>
                                <span className="d-flex align-items-center">
                                    <h6 style={{marginBottom: 0}}>Gold Range:</h6>
                                    <p style={{marginBottom: 0, marginLeft: "0.5rem"}}>{enemy?.minGold + " - " + enemy?.maxGold}</p>
                                </span>
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
                                <Col style={{textAlign: "center"}}>
                                    <Card style={{border: "4px ridge grey"}}>
                                        <h5 style={{textAlign: "center"}}>Defense</h5>
                                        <p style={{marginBottom: 0}}>Base Health: {enemy?.baseHealth}</p>
                                        <p style={{marginBottom: 0}}>Slashing Armor: {enemy?.slashingArmor}</p>
                                        <p style={{marginBottom: 0}}>Piercing Armor: {enemy?.piercingArmor}</p>
                                        <p style={{marginBottom: 0}}>Blunt Armor: {enemy?.bluntArmor}</p>
                                    </Card>
                                    {/* <Card style={{border: "4px ridge grey"}}>
                                        <h5 style={{textAlign: "center"}}>Magic Resist</h5>
                                        <p style={{marginBottom: 0}}>Fire Resist: {enemy?.fireResist}</p>
                                        <p style={{marginBottom: 0}}>Ice Resist: {enemy?.iceResist}</p>
                                        <p style={{marginBottom: 0}}>Lightning Resist: {enemy?.lightningResist}</p>
                                    </Card> */}
                                </Col>
                            </Row>
                            <Row>
                                <Card>

                                <div className="d-flex flex-column align-items-center" style={{border: "4px ridge grey", marginTop: "0.5rem"}}>
                                    <h6 >Item drops</h6>
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
                                    <Card style={{maxWidth: "400px", minWidth: "200px", height: "100px", border: "4px ridge grey", marginBottom: "1rem"}}>
                                        <CardBody style={{overflow: "hidden", overflowY: "auto", textIndent: "20px"}}>
                                        {enemy?.description || "This is an enemy that has not yet been given a description"}
                                        </CardBody>
                                    </Card>
                                </span>
                                <span style={{textAlign: "center"}}>
                                {(loggedInUser.roles.includes("Admin")) && <button color="danger" onClick={handleEnemyDelete}>Delete Enemy</button>}
                                {(loggedInUser.roles.includes("Admin")) && <button color="warning" onClick={() => navigate(`../edit/${id}`, { state: { from: location.pathname } } )}>Edit enemy</button>}
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
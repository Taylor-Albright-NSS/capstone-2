import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, Col, Container, Input, Row } from "reactstrap"
import { UserContext } from "../ApplicationViews"
import { getUserEnemies } from "../../managers/enemyManager"
import "./MyProfile.css"
import { useLocation, useNavigate } from "react-router-dom"
import { CreateCharacterModal } from "./CreateCharacterModal"


export const MyProfile = () => {
    const [user, setUser] = useState()
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const navigate = useNavigate()

    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        getUserEnemies(userId).then(enemies => {
            console.log(enemies)
            setEnemies(enemies)
        })
    }, [userId])

    useEffect(() => {
        setUser(loggedInUser)
        console.log(loggedInUser)
    }, [loggedInUser])


    return (
        <Container style={{border: "4px solid black"}}>
            <h1>{user?.fullName}</h1>
            <Row style={{border: "4px solid green"}}>
                <Col style={{border: "4px solid red", maxHeight: "780px", minHeight: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <h3>My Enemies</h3>
                    <Card>
                        <CardBody>
                            {enemies?.map(enemy => {
                                return (
                                <Card onClick={() => navigate(`/enemy-list/${enemy.id}`)} key={enemy.id} className="hover" >
                                    <CardBody style={{cursor: "pointer"}}>
                                        <Row className="d-flex justify-content-between align-items-center">
                                            <Col>{enemy.name}</Col>
                                            <Col>Level: {enemy.minLevel} - {enemy.maxLevel}</Col>
                                            <img src={enemy.imageUrl} style={{maxWidth: "80px"}}/>
                                        </Row>
                                    </CardBody>
                                </Card>
                            )
                            })}
                        </CardBody>
                    </Card>
                </Col>
                <Col style={{border: "4px solid blue"}}>
                    <span className="d-flex justify-content-around">
                        <CreateCharacterModal />
                        <Input type="select" style={{maxWidth: "400px"}}/>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}
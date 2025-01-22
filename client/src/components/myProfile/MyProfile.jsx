import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardHeader, CardText, Col, Container, Input, Row } from "reactstrap"
import { UserContext } from "../ApplicationViews"
import { getUserEnemies } from "../../managers/enemyManager"
import "./MyProfile.css"
import { useLocation, useNavigate } from "react-router-dom"
import { CreateCharacterModal } from "./CreateCharacterModal"
import { getCharacters } from "../../managers/characterManager"


export const MyProfile = () => {
    const [user, setUser] = useState()
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const navigate = useNavigate()

    const [enemies, setEnemies] = useState([])
    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState()

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

    useEffect(() => {
        getCharacters().then(charList => {
            console.log(charList)
            setCharacters(charList)
        })
    }, [])

    const handleCharacterSelect = (e) => {
        const optionValue = e.target.value
        const selectedCharacter = characters.find(c => c.name == optionValue)
        console.log(selectedCharacter)
        setSelectedCharacter(selectedCharacter)
    }

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
                        <Input type="select" style={{maxWidth: "400px"}} onChange={handleCharacterSelect}>
                            {characters?.map(c => <option key={c.id}>{c.name}</option>)}
                        </Input>
                    </span>
                            {selectedCharacter && 
                            <Card className="mx-2 my-2">
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardText>{selectedCharacter.name}</CardText>
                                    <CardText>Health: {selectedCharacter?.health}</CardText>
                                    <CardText>Attack Power: {selectedCharacter?.attackPower}</CardText>
                                    <CardText>Slashing Armor: {selectedCharacter?.slashingArmor}</CardText>
                                    <CardText>Piercing Armor: {selectedCharacter?.piercingArmor}</CardText>
                                    <CardText>Blunt Armor: {selectedCharacter?.bluntArmor}</CardText>
                                    <CardText>Slashing Penetration: {selectedCharacter?.slashingPenetration}</CardText>
                                    <CardText>Piercing Penetration: {selectedCharacter?.piercingPenetration}</CardText>
                                    <CardText>Blunt Penetration: {selectedCharacter?.bluntPenetration}</CardText>
                                </CardBody>
                            </Card>
                            }
                </Col>
            </Row>
        </Container>
    )
}
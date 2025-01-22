import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardHeader, CardText, Col, Container, Input, Row } from "reactstrap"
import { UserContext } from "../ApplicationViews"
import { getUserEnemies } from "../../managers/enemyManager"
import "./MyProfile.css"
import { useLocation, useNavigate } from "react-router-dom"
import { CreateCharacterModal } from "./CreateCharacterModal"
import { getCharacters } from "../../managers/characterManager"
import { deleteCharacter } from "../../managers/characterManager"


export const MyProfile = () => {
    const [user, setUser] = useState()
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const navigate = useNavigate()

    const [enemies, setEnemies] = useState([])
    const [characters, setCharacters] = useState([])
    // const [selectedCharacter, setSelectedCharacter] = useState()
    const { selectedCharacter } = useContext(UserContext)
    const { setSelectedCharacter } = useContext(UserContext)
    const [isSelected, setIsSelected] = useState(true)

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
        getCharacters(userId).then(charList => {
            console.log(charList)
            setCharacters(charList)
        })
    }, [])
    useEffect(() => {
        // setSelectedCharacter(null)
    }, [])

    const handleCharacterSelect = (e) => {
        const optionValue = e.target.value
        const selectedCharacter = characters.find(c => c.name == optionValue)
        console.log(selectedCharacter)
        setSelectedCharacter(selectedCharacter)
        setIsSelected(true)
    }

    const handleDeleteCharacter = () => {
        deleteCharacter(selectedCharacter.id, userId).then(() => {
            getCharacters(userId).then(charList => {
                console.log(charList)
                setCharacters(charList)
            })
        })
        setSelectedCharacter(null)
    }

    const isCharacterEmpty = (char) => {
        return char && Object.keys(char).length === 0 && char.constructor === Object;
    }

    return (
        <Container style={{border: "4px solid black"}}>
            <h1>{user?.fullName}</h1>
            <Row style={{border: "4px solid green"}}>
                <Col style={{border: "4px solid red", maxHeight: "700px", minHeight: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <h3 style={{textAlign: "center"}}>My Enemies</h3>
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
                <Col style={{border: "4px solid blue", textAlign: "center"}}>
                    <span className="d-flex justify-content-around">
                        <CreateCharacterModal setCharacters={setCharacters} />
                        <Input type="select" value={selectedCharacter?.name} style={{maxWidth: "400px"}} onChange={handleCharacterSelect}>
                            <option key={1}>Select Character</option>
                            {characters?.map(c => <option key={c.id}>{c.name}</option>)}
                        </Input>
                    </span>
                            {selectedCharacter?.id && 
                            <Card className="mx-2 my-2">
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardText>{selectedCharacter?.name}</CardText>
                                    {selectedCharacter?.health != null && <CardText>Health: {selectedCharacter?.health}</CardText>}
                                    {selectedCharacter?.attackPower != null && <CardText>Attack Power: {selectedCharacter?.attackPower}</CardText>}
                                    {selectedCharacter?.slashingArmor != null && <CardText>Slashing Armor: {selectedCharacter?.slashingArmor}</CardText>}
                                    {selectedCharacter?.piercingArmor != null && <CardText>Piercing Armor: {selectedCharacter?.piercingArmor}</CardText>}
                                    {selectedCharacter?.bluntArmor != null && <CardText>Blunt Armor: {selectedCharacter?.bluntArmor}</CardText>}
                                    {selectedCharacter?.slashingPenetration != null && <CardText>Slashing Penetration: {selectedCharacter?.slashingPenetration}</CardText>}
                                    {selectedCharacter?.piercingPenetration != null && <CardText>Piercing Penetration: {selectedCharacter?.piercingPenetration}</CardText>}
                                    {selectedCharacter?.bluntPenetration != null && <CardText>Blunt Penetration: {selectedCharacter?.bluntPenetration}</CardText>}
                                </CardBody>
                                <Button onClick={handleDeleteCharacter}>Delete Character</Button>
                            </Card>
                            }
                </Col>
            </Row>
        </Container>
    )
}
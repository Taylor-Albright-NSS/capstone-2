import { useContext, useEffect, useState } from "react"
import { Card, CardBody, CardHeader, CardText, Col, Container, Input, Row } from "reactstrap"
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
    const location = useLocation()

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
        <Container className="granite-background" style={{border: "6px ridge grey"}}>
            <h1 style={{textAlign: "center"}}>{user?.fullName}</h1>
            <Row>
                <Col style={{border: "6px ridge grey", maxHeight: "700px", minHeight: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <h3 style={{border: "4px outset grey", textAlign: "center"}}>My Enemies</h3>
                    <Card>
                        <CardBody>
                            {enemies?.map(enemy => {
                                return (
                                <Card style={{border: "4px ridge grey"}} onClick={() => navigate(`/enemy-list/${enemy.id}`, {state: { from: location.pathname }, replace: false})} key={enemy.id} className="hover" >
                                    <CardBody className="wood-background" style={{padding: 0, cursor: "pointer"}}>
                                        <Row className="d-flex align-items-center" style={{padding: "1rem", color: "gold"}}>
                                            <Col>{enemy.name}</Col>
                                            <Col>Level: {enemy.minLevel} - {enemy.maxLevel}</Col>
                                            <img src={enemy.imageUrl} style={{maxWidth: "80px", minHeight: "80px", padding: 0, border: "4px ridge grey"}}/>
                                        </Row>
                                    </CardBody>
                                </Card>
                            )
                            })}
                        </CardBody>
                    </Card>
                </Col>
                <Col style={{border: "6px ridge grey", textAlign: "center"}}>
                    <h3 style={{border: "4px outset grey"}}>Characters</h3>
                    <span className="d-flex justify-content-around mt-4">
                        <CreateCharacterModal setCharacters={setCharacters} />
                        <Input type="select" value={selectedCharacter?.name} style={{maxWidth: "400px", border: "4px ridge grey", borderRadius: "0px"}} onChange={handleCharacterSelect}>
                            <option key={1}>Select Character</option>
                            {characters?.map(c => <option key={c.id}>{c.name}</option>)}
                        </Input>
                    </span>
                            {selectedCharacter?.id && 
                            <Card style={{border: "6px ridge grey"}} className="mx-2 my-2 d-flex align-items-center">
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardText>{selectedCharacter?.name}</CardText>
                                    {selectedCharacter?.health != null && <CardText style={{margin: 0}}>Health: {selectedCharacter?.health}</CardText>}
                                    {selectedCharacter?.attackPower != null && <CardText style={{margin: 0}}>Attack Power: {selectedCharacter?.attackPower}</CardText>}
                                    {selectedCharacter?.slashingPenetration != null && <CardText style={{margin: 0}}>Slashing Penetration: {selectedCharacter?.slashingPenetration}</CardText>}
                                    {selectedCharacter?.piercingPenetration != null && <CardText style={{margin: 0}}>Piercing Penetration: {selectedCharacter?.piercingPenetration}</CardText>}
                                    {selectedCharacter?.bluntPenetration != null && <CardText style={{margin: 0}}>Blunt Penetration: {selectedCharacter?.bluntPenetration}</CardText>}
                                    {selectedCharacter?.slashingArmor != null && <CardText style={{margin: 0}}>Slashing Armor: {selectedCharacter?.slashingArmor}</CardText>}
                                    {selectedCharacter?.piercingArmor != null && <CardText style={{margin: 0}}>Piercing Armor: {selectedCharacter?.piercingArmor}</CardText>}
                                    {selectedCharacter?.bluntArmor != null && <CardText style={{margin: 0}}>Blunt Armor: {selectedCharacter?.bluntArmor}</CardText>}
                                </CardBody>
                                <button style={{width: "200px", textAlign: "center"}} onClick={handleDeleteCharacter}>Delete Character</button>
                            </Card>
                            }
                </Col>
            </Row>
        </Container>
    )
}
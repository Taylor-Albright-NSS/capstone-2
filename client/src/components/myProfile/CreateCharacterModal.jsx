import { useContext, useEffect, useState } from "react";
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, Input, Form, Container } from "reactstrap"
import { UserContext } from "../ApplicationViews";
import { postCharacter } from "../../managers/characterManager";
import { getCharacters } from "../../managers/characterManager";
export const CreateCharacterModal = ({setCharacters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const [characterTemplate, setCharacterTemplate] = useState({
        userId: userId,
        name: "No Name",
        health: 1,
        attackPower: 1,
        slashingArmor: 0,
        piercingArmor: 0,
        bluntArmor: 0,
        slashingPenetration: 0,
        piercingPenetration: 0,
        bluntPenetration: 0,
    })
    const [character, setCharacter] = useState({})

    useEffect(() => {
        setCharacter(characterTemplate)
    }, [characterTemplate])

    const handleTextInput = (e) => {
        const {name, value} = e.target
        setCharacter({...character, [name]: value})
        console.log(character)
    }

    const handleNumberInput = (e) => {
        const {name, value, clientX, clientY} = e.target
        if (value < 0 || value > 9999) { // Example limit
            console.log('test')
        } else {
            setCharacter({...character, [name]: parseInt(value)})
        }
        console.log(character)
    }

    const handlePostNewCharacter = () => {
        postCharacter(character).then(data => {
            console.log(data)
            getCharacters(userId).then(chars => {
                setCharacters(chars)
            })
        })
    }

    return (
            <Container className="d-flex justify-content-center">
                <Modal isOpen={isOpen} toggle={() => {
                    toggleModal()
                }}>
                    <ModalHeader toggle={() => {
                        toggleModal()
                    }}
                    >New Character
                    </ModalHeader>
                    
                    <ModalBody>
                        <Form>
                            <fieldset>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Name: </Label>
                                    <Input style={{maxWidth: "100px"}} type="text" name="name" id="name" value={character.name} onChange={handleTextInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Health: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="health" id="health" value={character.health} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Attack Power: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="attackPower" id="attackPower" value={character.attackPower} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Slashing Armor: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="slashingArmor" id="slashingArmor" value={character.slashingArmor} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Piercing Armor: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="piercingArmor" id="piercingArmor" value={character.piercingArmor} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Blunt Armor: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="bluntArmor" id="bluntArmor" value={character.bluntArmor} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Slashing Penetration: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="slashingPenetration" id="slashingPenetration" value={character.slashingPenetration} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Piercing Penetration: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="piercingPenetration" id="piercingPenetration" value={character.piercingPenetration} onChange={handleNumberInput}/>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center justify-content-center">
                                    <Label style={{width: "200px"}}>Blunt Penetration: </Label>
                                    <Input style={{maxWidth: "100px"}} type="number" name="bluntPenetration" id="bluntPenetration" value={character.bluntPenetration} onChange={handleNumberInput}/>
                                </FormGroup>
                            </fieldset>
                        </Form>
                    </ModalBody>

                    <ModalFooter className="d-flex justify-content-center">
                        <Button 
                            color="danger" 
                            onClick={() => {
                                toggleModal()
                                setCharacter(characterTemplate)
                                }
                            }
                            >Cancel</Button>

                        <Button 
                            color="primary" 
                            onClick={() => {
                                toggleModal()
                                handlePostNewCharacter()
                                }}
                            >Confirm</Button>
                    </ModalFooter>
                </Modal>
                    <Button
                        onClick={() => {
                            toggleModal()
                            setCharacter(characterTemplate)
                        }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            name: "image",
                            minWidth: "50px",
                            minHeight: "50px",
                            cursor: "pointer",
                        }}
                        >Create New Character
                    </Button>
            </Container>

    )
}
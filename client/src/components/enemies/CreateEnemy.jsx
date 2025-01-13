import { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { UserContext } from "../ApplicationViews";

export const CreateEnemy = () => {
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const [newEnemy, setNewEnemy] = useState({
        userId: userId,
        name: "test"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('testing')
        console.log(newEnemy, 'New Enemy Object')
    }

    const handleTextInput = (e) => {
        setNewEnemy({...newEnemy, [e.target.name]: e.target.value})
    }

    return (
        <Form className="my-4" onSubmit={handleSubmit} style={{border: "4px solid black"}}>
            <fieldset style={{maxWidth: "400px", border: "2px solid blue"}}>
            <Row>
                <Col>
                    <FormGroup className="d-flex align-items-center flex-column">
                        <Label for="name">Name</Label>
                        <Input style={{width: "200px"}} type="text" name="name" id="name" value={newEnemy.name} onChange={handleTextInput}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex align-items-center flex-column">
                    <FormGroup className="justify-content-center">
                        <Label for="minLevel">Min. Level</Label>
                        <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="maxLevel">Max Level</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" />
                    </FormGroup>
                </Col>
                <Col className="d-flex align-items-center flex-column">
                    <FormGroup>
                        <Label for="baseDamage">Base Damage</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="baseHealth">Base Health</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="baseExperience">Base Experience</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
            </Row>

            </fieldset>

            <fieldset style={{maxWidth: "200px", border: "2px solid green"}}>
                <legend>Armor Values</legend>
                <FormGroup>
                    <Label for="slashingArmor">Slashing Armor</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="slashingArmor" id="slashingArmor" />
                </FormGroup>
                <FormGroup>
                    <Label for="piercingArmor">Piercing Armor</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="piercingArmor" id="piercingArmor" />
                </FormGroup>
                <FormGroup>
                    <Label for="bluntArmor">Blunt Armor</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="bluntArmor" id="bluntArmor" />
                </FormGroup>
            </fieldset>

            <fieldset style={{maxWidth: "200px", border: "2px solid red"}}>
                <legend>Damage Types</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="slashingDamage" />
                        Slashing
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="piercingDamage" />
                        Piercing
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="bluntDamage" />
                        Blunt
                    </Label>
                </FormGroup>
            </fieldset>

            <FormGroup style={{maxWidth: "500px"}}>
                <Label for="description">Enemy Description</Label>
                <Input style={{resize: "none"}} type="textarea" name="description" id="description"></Input>
            </FormGroup>
        </Form>
        // <div className="container" style={{ maxWidth: "500px" }}>
        //     <h3>Create Enemy Page</h3>
        // </div>
    );
}
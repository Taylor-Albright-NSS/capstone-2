import { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { UserContext } from "../ApplicationViews";

export const CreateEnemy = () => {
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id

    const [isChecked, setIsChecked] = useState(false)
    const [newEnemy, setNewEnemy] = useState({
        userId: userId,
        name: "test"
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('testing')
        console.log(newEnemy, 'New Enemy Object')
    }

    // const handleCheckbox = (e) => {
    //     setNewEnemy({...newEnemy, [e.target.name]: !isChecked})
    //     setIsChecked(!isChecked)
    // }

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setNewEnemy({ ...newEnemy, [name]: checked });
    };

    const handleTextInput = (e) => {
        setNewEnemy({...newEnemy, [e.target.name]: e.target.checked})
    }

    return (
        <Form className="my-4 mx-4" onSubmit={handleSubmit} style={{border: "4px solid black"}}>
            <Button>Submit</Button>
                <Row className="d-flex mx-4">
                    {/* LEFT SIDE */}
                    <Col className="col-4">
                        <FormGroup>
                            <Label for="image">Click to select an image</Label>
                            <div
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    border: "2px solid grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    backgroundImage: `url(${newEnemy.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                {!newEnemy.image && <span>Select Image</span>}
                            </div>
                        </FormGroup>

                        <FormGroup className="d-flex align-items-center flex-row">
                            <Label for="name">Name</Label>
                            <Input style={{width: "200px"}} type="text" name="name" id="name" value={newEnemy.name} onChange={handleTextInput}/>
                        </FormGroup>
                        <FormGroup style={{maxWidth: "500px"}}>
                                <Label for="description">Enemy Description</Label>
                                <Input style={{resize: "none"}} type="textarea" name="description" id="description"></Input>
                            </FormGroup>
                    </Col>
                    {/* RIGHT SIDE */}
                    <Col>
                        <Row>
                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <Col className="d-flex align-items-center flex-column">
                                    <FormGroup>
                                        <Label for="minLevel">Min. Level</Label>
                                        <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="maxLevel">Max Level</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" />
                                    </FormGroup>
                                </Col>
                                <Col className="d-flex align-items-center flex-column">
                                <FormGroup className="d-flex flex-column align-items-center">
                                <Label for="baseDamage">Base Damage</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center">
                                        <Label for="baseHealth">Base Health</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center ">
                                        <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" />
                                    </FormGroup>
                                </Col>
                            </fieldset>

                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <legend>Armor Values</legend>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="slashingArmor">Slashing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="slashingArmor" id="slashingArmor" />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="piercingArmor">Piercing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="piercingArmor" id="piercingArmor" />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="bluntArmor">Blunt Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="bluntArmor" id="bluntArmor" />
                                </FormGroup>
                            </fieldset>

                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <legend>Damage Types</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="slashingDamage" onChange={handleCheckbox} checked={newEnemy.slashingDamage}/>
                                        Slashing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="piercingDamage" onChange={handleCheckbox} checked={newEnemy.piercingDamage}/>
                                        Piercing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="bluntDamage" onChange={handleCheckbox} checked={newEnemy.bluntDamage}/>
                                        Blunt
                                    </Label>
                                </FormGroup>
                            </fieldset>
                        </Row>
                    </Col>
                </Row>
        </Form>
        // <div className="container" style={{ maxWidth: "500px" }}>
        //     <h3>Create Enemy Page</h3>
        // </div>
    );
}
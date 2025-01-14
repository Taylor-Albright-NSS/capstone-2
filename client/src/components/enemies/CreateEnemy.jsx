import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { postEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";


export const CreateEnemy = () => {
    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id
    const [images, setImages] = useState([])
    const [items, setItems] = useState([])
    const [newEnemy, setNewEnemy] = useState({
        userId: userId,
        imageId: 1,
        name: "test 4",
        minLevel: 10,
        maxLevel: 15,
        baseDamage: 1,
        baseHealth: 1,
        baseExperience: 1,
        slashingArmor: 5,
        piercingArmor: 5,
        bluntArmor: 5,
        slashingDamage: false,
        piercingDamage: false,
        bluntDamage: false,
        description: "",
        itemIds: []
    })

    useEffect(() => {
        getItems().then(itemList => {
            console.log(itemList)
            setItems(itemList)
        })
    }, [])
    useEffect(() => {
        getEnemyImages().then(imageList => {
            console.log(imageList)
            setImages(imageList)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postEnemy(newEnemy).then(() => {
            console.log(newEnemy)
        })
    }

    const handleItemDropsChange = (e) => {
        const itemId = e.target.value;  // ID of the item
        const isChecked = e.target.checked;
        if (isChecked) {
            setNewEnemy(prevState => ({...prevState, itemIds: [...prevState.itemIds, parseInt(itemId)]}))
        } else {
            setNewEnemy(prevState => ({...prevState, itemIds: prevState.itemIds.filter(id => id !== parseInt(itemId))}))  // Remove itemId
        }
      };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setNewEnemy({ ...newEnemy, [name]: checked });
    };

    const handleItemSelect = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.options[e.target.selectedIndex].value, ' test')
    }

    const handleTextInput = (e) => {
        const {name, value} = e.target

        setNewEnemy({...newEnemy, [name]: value})
        console.log(newEnemy)
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
                                    maxWidth: "200px",
                                    minHeight: "200px",
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
                                <Input style={{resize: "none"}} type="textarea" name="description" id="description" onChange={handleTextInput}></Input>
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
                                        <Input type="checkbox" name="slashingDamage" onChange={handleCheckbox} checked={newEnemy.slashingDamage || false}/>
                                        Slashing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="piercingDamage" onChange={handleCheckbox} checked={newEnemy.piercingDamage || false}/>
                                        Piercing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="bluntDamage" onChange={handleCheckbox} checked={newEnemy.bluntDamage || false}/>
                                        Blunt
                                    </Label>
                                </FormGroup>
                            </fieldset>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <fieldset>
                        <legend>Item Drops</legend>
                                        {items && items.map(item => 
                                             (
                                                <Col key={item.id} xs="12" sm="6" md="4" lg="3">
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" name={`item-${item.id}`} value={item.id} onChange={handleItemDropsChange}/>
                                                        {item.name}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            )
                                        )}
                                {/* <FormGroup >
                                    <Label for="items">TEST</Label>
                                    <Input type="select" onChange={(e) => handleSelect(e)}>
                                    <option key={0} value={0}>Select an item</option>
                                        {items && items.map(item => {
                                            return (<option key={item.id} value={item.id} data-name={'test'}>{item.name}</option>)
                                        })}
                                    </Input>
                                </FormGroup> */}
                        {/* {items && items.map(item => {
                            return (

                        )
                        })} */}
                    </fieldset>
                </Row>
        </Form>
        // <div className="container" style={{ maxWidth: "500px" }}>
        //     <h3>Create Enemy Page</h3>
        // </div>
    );
}
import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { getEnemyForEdit, putEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { useNavigate, useParams } from "react-router-dom";


export const EnemyEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [images, setImages] = useState([])
    const [items, setItems] = useState([])
    const [currentEnemy, setCurrentEnemy] = useState({})

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
    useEffect(() => {
        getEnemyForEdit(id).then(enemy => {
            console.log(enemy)
            setCurrentEnemy(enemy)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        putEnemy(currentEnemy, currentEnemy.id).then(data => {
            console.log(data)
            navigate("/enemy-list")
        })
    }

    const handleItemDropsChange = (e) => {
        const itemId = e.target.value;  // ID of the item
        const isChecked = e.target.checked;
        if (isChecked) {
            setCurrentEnemy(prevState => ({...prevState, itemIds: [...prevState.itemIds, parseInt(itemId)]}))
        } else {
            setCurrentEnemy(prevState => ({...prevState, itemIds: prevState.itemIds.filter(id => id !== parseInt(itemId))}))  // Remove itemId
        }
      };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setCurrentEnemy({ ...currentEnemy, [name]: checked });
    };

    const handleTextInput = (e) => {
        const {name, value} = e.target
        setCurrentEnemy({...currentEnemy, [name]: value})
        console.log(currentEnemy)
    }

    const handleNumberInput = (e) => {
        const {name, value} = e.target
        setCurrentEnemy({...currentEnemy, [name]: parseInt(value)})
        console.log(currentEnemy)
    }

    return (
        <Form className="my-4 mx-4"  style={{border: "4px solid black"}}>
            <Button onClick={handleSubmit}>Submit</Button>
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
                                    backgroundImage: `url(${currentEnemy.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                {!currentEnemy.image && <span>Select Image</span>}
                            </div>
                        </FormGroup>

                        <FormGroup className="d-flex align-items-center flex-row">
                            <Label for="name">Name</Label>
                            <Input style={{width: "200px"}} type="text" name="name" id="name" value={currentEnemy.name || ''} onChange={handleTextInput}/>
                        </FormGroup>
                        <FormGroup style={{maxWidth: "500px"}}>
                                <Label for="description">Enemy Description</Label>
                                <Input style={{resize: "none"}} type="textarea" name="description" id="description" value={currentEnemy.description || ''} onChange={handleTextInput}></Input>
                            </FormGroup>
                    </Col>
                    {/* RIGHT SIDE */}
                    <Col>
                        <Row>
                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <Col className="d-flex align-items-center flex-column">
                                    <FormGroup>
                                        <Label for="minLevel">Min. Level</Label>
                                        <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" value={currentEnemy.minLevel} onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="maxLevel">Max Level</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" value={currentEnemy.maxLevel} onChange={handleNumberInput} />
                                    </FormGroup>
                                </Col>
                                <Col className="d-flex align-items-center flex-column">
                                <FormGroup className="d-flex flex-column align-items-center">
                                <Label for="baseDamage">Base Damage</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" value={currentEnemy.baseDamage} onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center">
                                        <Label for="baseHealth">Base Health</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" value={currentEnemy.baseHealth} onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center ">
                                        <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" value={currentEnemy.baseExperience} onChange={handleNumberInput} />
                                    </FormGroup>
                                </Col>
                            </fieldset>

                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <legend>Armor Values</legend>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="slashingArmor">Slashing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="slashingArmor" id="slashingArmor" value={currentEnemy.slashingArmor} onChange={handleNumberInput} />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="piercingArmor">Piercing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="piercingArmor" id="piercingArmor" value={currentEnemy.piercingArmor} onChange={handleNumberInput} />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="bluntArmor">Blunt Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="bluntArmor" id="bluntArmor" value={currentEnemy.bluntArmor} onChange={handleNumberInput} />
                                </FormGroup>
                            </fieldset>

                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <legend>Damage Types</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="slashingDamage" onChange={handleCheckbox} checked={currentEnemy.slashingDamage || false}/>
                                        Slashing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="piercingDamage" onChange={handleCheckbox} checked={currentEnemy.piercingDamage || false}/>
                                        Piercing
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="bluntDamage" onChange={handleCheckbox} checked={currentEnemy.bluntDamage || false}/>
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
                                                        <Input 
                                                        type="checkbox" 
                                                        name={`item-${item.id}`} 
                                                        value={item.id} 
                                                        onChange={handleItemDropsChange} 
                                                        checked={currentEnemy?.itemIds?.includes(item.id)}
                                                        />
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
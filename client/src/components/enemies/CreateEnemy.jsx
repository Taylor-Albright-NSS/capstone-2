import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { postEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { useNavigate } from "react-router-dom";
import { Modal,  } from "reactstrap";


export const CreateEnemy = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const { loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const userId = loggedInUser.id
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(null)

    const [items, setItems] = useState([])
    const [newEnemy, setNewEnemy] = useState({
        userId: userId,
        imageId: 1,
        name: "test 1",
        minLevel: 1,
        maxLevel: 1,
        baseDamage: 1,
        baseHealth: 1,
        baseExperience: 1,
        slashingArmor: 1,
        piercingArmor: 1,
        bluntArmor: 1,
        slashingDamage: false,
        piercingDamage: false,
        bluntDamage: false,
        description: "",
        itemIds: [],
    })

    useEffect(() => {
        getItems().then(itemList => {
            console.log(itemList, ' Items list')
            setItems(itemList)
        })
    }, [])

    useEffect(() => {
        getEnemyImages().then(imageList => {
            console.log(imageList, 'Images list')
            setImages(imageList)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postEnemy(newEnemy).then(() => {
            navigate("/enemy-list")
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

    const handleNumberInput = (e) => {
        const {name, value} = e.target
        setNewEnemy({...newEnemy, [name]: parseInt(value)})
        console.log(newEnemy)
    }

    return (
        <Form className="my-4 mx-4" onSubmit={handleSubmit} style={{border: "4px solid black"}}>
            <Button>Submit</Button>
                <Row className="d-flex mx-4">
                    <Col className="col-4">
                        <FormGroup>
                            <Label for="image">Click to select an image</Label>
                            <Modal isOpen={isOpen} toggle={() => {
                                    toggleModal()
                                    setCurrentImage(newEnemy.image)
                                }}>

                                <ModalHeader toggle={() => {
                                    toggleModal()
                                    setCurrentImage(newEnemy.image)
                                }}>Header</ModalHeader>
                                <ModalBody>
                                    {images?.map(image => 
                                        (<img 
                                            key={image.id} 
                                            src={image.imageLocation} 
                                            alt={"NO IMAGE"} 
                                            style={{maxWidth: "80px"}}
                                            className="mx-1"
                                            border="2px solid black"
                                            onClick={() => {
                                                // setNewEnemy(prev => ({...prev, imageId: image.id, image: image}))
                                                setCurrentImage(image)
                                                console.log("test")
                                            }
                                            }
                                            />)
                                    )}
                                </ModalBody>
                                <ModalFooter className="d-flex justify-content-center">
                                    <Button 
                                        color="danger" 
                                        onClick={() => {
                                            toggleModal()
                                            console.log(newEnemy.image)
                                            setCurrentImage(newEnemy.image)
                                            }
                                        }
                                        >Cancel</Button>

                                    <Button 
                                        color="primary" 
                                        onClick={() => {
                                            toggleModal()
                                            setNewEnemy(prev => ({...prev, imageId: currentImage.id, image: currentImage}))
                                            }}
                                        >Confirm</Button>
                                </ModalFooter>
                            </Modal>
                        </FormGroup>
                            <div
                                onClick={toggleModal}
                                style={{
                                    name: "image",
                                    maxWidth: "200px",
                                    minHeight: "200px",
                                    border: "2px solid grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    backgroundImage: `url(${currentImage?.imageLocation})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                {currentImage == null || currentImage == undefined ? <span>Select Image</span> : ""}
                            </div>

                        <FormGroup className="d-flex align-items-center flex-row">
                            <Label for="name">Name</Label>
                            <Input style={{width: "200px"}} type="text" name="name" id="name" value={newEnemy.name} onChange={handleTextInput}/>
                        </FormGroup>
                        <FormGroup style={{maxWidth: "500px"}}>
                                <Label for="description">Enemy Description</Label>
                                <Input style={{resize: "none"}} type="textarea" name="description" id="description" onChange={handleTextInput}></Input>
                            </FormGroup>
                        <Row>
                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <Col className="d-flex align-items-center flex-column">
                                    <FormGroup>
                                        <Label for="minLevel">Min. Level</Label>
                                        <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="maxLevel">Max Level</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" onChange={handleNumberInput} />
                                    </FormGroup>
                                </Col>
                                <Col className="d-flex align-items-center flex-column">
                                <FormGroup className="d-flex flex-column align-items-center">
                                <Label for="baseDamage">Base Damage</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center">
                                        <Label for="baseHealth">Base Health</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" onChange={handleNumberInput} />
                                    </FormGroup>
                                    <FormGroup className="d-flex flex-column align-items-center ">
                                        <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                                        <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" onChange={handleNumberInput} />
                                    </FormGroup>
                                </Col>
                            </fieldset>

                            <fieldset style={{maxWidth: "200px", border: "2px solid grey"}}>
                                <legend>Armor Values</legend>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="slashingArmor">Slashing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="slashingArmor" id="slashingArmor" onChange={handleNumberInput} />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="piercingArmor">Piercing Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="piercingArmor" id="piercingArmor" onChange={handleNumberInput} />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column align-items-center">
                                    <Label for="bluntArmor">Blunt Armor</Label>
                                    <Input style={{maxWidth: "76px"}} type="number" name="bluntArmor" id="bluntArmor" onChange={handleNumberInput} />
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
                                                        <Input type="checkbox" name={`item-${item.id}`} value={item.id} onChange={handleItemDropsChange} />
                                                        {item.name}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            )
                                        )}
                    </fieldset>
                </Row>
        </Form>
        // <div className="container" style={{ maxWidth: "500px" }}>
        //     <h3>Create Enemy Page</h3>
        // </div>
    );
}
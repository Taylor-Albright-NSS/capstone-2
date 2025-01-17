import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter, Card } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { postEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { useNavigate } from "react-router-dom";
import { FormModal } from "../formComponents/FormModal";
import { Fieldset1 } from "../formComponents/Fieldset1";
import { Fieldset2 } from "../formComponents/Fieldset2";
import { FieldsetDefense } from "../formComponents/FieldsetDefense";
import { FieldsetOffense } from "../formComponents/FieldsetOffense";
import { FieldsetItemDrops } from "../formComponents/FieldsetItemDrops";


export const CreateEnemy = () => {
    const { loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const userId = loggedInUser.id
    const [images, setImages] = useState([])
    const [enemyImage, setEnemyImage] = useState(null)

    const [items, setItems] = useState([])
    const [enemy, setEnemy] = useState({
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
        postEnemy(enemy).then(() => {
            navigate("/enemy-list")
        })
    }

    const handleItemDropsChange = (e) => {
        const itemId = e.target.value;  // ID of the item
        const isChecked = e.target.checked;
        if (isChecked) {
            setEnemy(prevState => ({...prevState, itemIds: [...prevState.itemIds, parseInt(itemId)]}))
        } else {
            setEnemy(prevState => ({...prevState, itemIds: prevState.itemIds.filter(id => id !== parseInt(itemId))}))  // Remove itemId
        }
      };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setEnemy({ ...enemy, [name]: checked });
    };

    const handleItemSelect = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.options[e.target.selectedIndex].value, ' test')
    }

    const handleTextInput = (e) => {
        const {name, value} = e.target

        setEnemy({...enemy, [name]: value})
        console.log(enemy)
    }

    const handleNumberInput = (e) => {
        const {name, value} = e.target
        setEnemy({...enemy, [name]: parseInt(value)})
        console.log(enemy)
    }

    return (
        <Form className="my-4 mx-4" onSubmit={handleSubmit} style={{border: "2px solid black"}}>
            <Row className="justify-content-center mx-4" style={{border: "2px solid green"}}>
                <Col className="col-7" style={{border: "2px solid red"}}>
                {/*ROW 1*/}
                    <Row style={{border: "2px solid yellow", padding: "1rem"}}>
                        <Col className="d-flex justify-content-evenly">
                                <FormModal setEnemyImage={setEnemyImage} enemyImage={enemyImage} setEnemy={setEnemy} enemy={enemy} setImages={setImages} images={images} />
                                <Fieldset1 enemy={enemy} handleTextInput={handleTextInput} handleNumberInput={handleNumberInput} />
                                <Fieldset2 handleNumberInput={handleNumberInput} handleTextInput={handleTextInput} />
                        </Col>
                    </Row>
                {/*ROW 2*/}
                    <Row style={{border: "2px solid yellow"}}>

                        <Col style={{border: "2px solid blue"}}>
                            <FieldsetOffense handleCheckbox={handleCheckbox} enemy={enemy} handleNumberInput={handleNumberInput} />
                        </Col>
                        <Col style={{border: "2px solid blue"}}>
                            <FieldsetDefense handleNumberInput={handleNumberInput} />
                        </Col>

                            
                    </Row>
                </Col>
                <Col style={{border: "2px solid blue"}}>
                            <FieldsetItemDrops handleItemDropsChange={handleItemDropsChange} items={items} handleNumberInput={handleNumberInput} />
                </Col>
            </Row>
            
            <Button>Submit</Button>
        </Form>
    );
}
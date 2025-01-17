import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { getEnemyForEdit, putEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { useNavigate, useParams } from "react-router-dom";
import { FormMain } from "../formComponents/_FormMain";


export const EnemyEdit = () => {
    const [enemy, setEnemy] = useState({
        name: "",
        minLevel: 0,
        maxLevel: 0,
        baseDamage: 0,
        baseHealth: 0,
        baseExperience: 0,
        slashingArmor: 0,
        piercingArmor: 0,
        bluntArmor: 0,
        slashingDamage: false,
        piercingDamage: false,
        bluntDamage: false,
        description: "",
        imageId: null,
        itemIds: []
    });
    const { id } = useParams()
    const navigate = useNavigate()

    const [images, setImages] = useState([])
    const [items, setItems] = useState([])
    const [enemyImage, setEnemyImage] = useState({})

    const [originalEnemy, setOriginalEnemy] = useState({})

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

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
            setEnemy(enemy)
            setOriginalEnemy(enemy)
            setEnemyImage(enemy.image)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        putEnemy(enemy, enemy.id).then(data => {
            console.log(data)
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

    const handleTest = () =>{
        console.log(enemy, "current enemy")
        console.log(originalEnemy, "original enemy")
    }

    return (
                <FormMain 
                    handleSubmit={handleSubmit} 
                    setEnemyImage={setEnemyImage}
                    enemyImage={enemyImage}
                    setEnemy={setEnemy}
                    enemy={enemy}
                    setImages={setImages}
                    images={images}
                    handleTextInput={handleTextInput}
                    handleNumberInput={handleNumberInput}
                    handleCheckbox={handleCheckbox}
                    handleItemDropsChange={handleItemDropsChange}
                    items={items} 
            />
    );
}
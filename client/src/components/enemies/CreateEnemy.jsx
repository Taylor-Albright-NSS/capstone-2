import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter, Card } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { postEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { getEnemyImagesFirebase } from "../../managers/imageManager";
import { useNavigate } from "react-router-dom";
import { FormMain } from "../formComponents/_FormMain";
import "../../App.css"
import "./CreateEnemy.css"


export const CreateEnemy = () => {
    const { loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const userId = loggedInUser.id
    const [images, setImages] = useState([])
    // const [enemyImage, setEnemyImage] = useState(null)

    const [items, setItems] = useState([])
    const [enemy, setEnemy] = useState({
        userId: userId,
        imageUrl: null,
        name: "",
        minLevel: 1,
        maxLevel: 1,
        strength: 1,
        baseHealth: 1,
        baseExperience: 0,
        slashingArmor: 0,
        piercingArmor: 0,
        bluntArmor: 0,
        slashingDamage: false,
        piercingDamage: false,
        bluntDamage: false,
        dodgeRating: 0,
        accuracyRating: 0,
        fireResist: 0,
        iceResist: 0,
        lightningResist: 0,
        minGold: 0,
        maxGold: 0,
        description: "",
        itemIds: [],
    })

    useEffect(() => {
        getItems().then(itemList => {
            console.log(itemList, ' Items list')
            setItems(itemList)
        })
    }, [])

    // useEffect(() => {
    //     getEnemyImagesFirebase().then(imageList => {
    //         console.log(imageList, 'Images list')
    //         setImages(imageList)
    //     })
    // }, [])
    useEffect(() => {
        getEnemyImagesFirebase().then(imageList => {
            console.log(imageList, 'Images list')
            setImages(imageList)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (enemy.name.length < 1) {
            window.alert("Name must be at least 1 character long")
            return
        }
        if (enemy.imageUrl == null) {
            enemy.imageUrl = "https://firebasestorage.googleapis.com/v0/b/capstone2-3243e.firebasestorage.app/o/uploads%2FNo%20Image.png?alt=media&token=a7ddaad7-0650-43d7-bcdf-de98a4b81542"
        }
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
    }

    const handleNumberInput = (e) => {
        const {name, value, clientX, clientY} = e.target
        if (value < 0 || value > 9999) { // Example limit
            console.log('test')
        } else {
            setEnemy({...enemy, [name]: parseInt(value)})
        }
    }

    const handleLimiters = (e) => {

    }

    return (
        <>
            <FormMain 
                handleSubmit={handleSubmit} 
                setEnemy={setEnemy}
                enemy={enemy}
                setImages={setImages}
                images={images}
                handleTextInput={handleTextInput}
                handleNumberInput={handleNumberInput}
                handleCheckbox={handleCheckbox}
                handleItemDropsChange={handleItemDropsChange}
                items={items}
                isCreateButton={true}
            />
        </>
    );
}
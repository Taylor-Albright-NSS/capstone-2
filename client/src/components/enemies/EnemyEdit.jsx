import { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { UserContext } from "../ApplicationViews";
import { getEnemyForEdit, putEnemy } from "../../managers/enemyManager";
import { getItems } from "../../managers/itemManager";
import { getEnemyImages } from "../../managers/imageManager";
import { getEnemyImagesFirebase } from "../../managers/imageManager";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormMain } from "../formComponents/_FormMain";


export const EnemyEdit = () => {
    const [enemy, setEnemy] = useState({
        name: "",
        minLevel: 0,
        maxLevel: 0,
        attackPower: 0,
        baseHealth: 0,
        baseExperience: 0,
        slashingArmor: 0,
        piercingArmor: 0,
        bluntArmor: 0,
        slashingDamage: false,
        piercingDamage: false,
        bluntDamage: false,
        fireResist: 0,
        iceResist: 0,
        lightningResist: 0,
        minGold: 0,
        maxGold: 0,
        description: "",
        imageUrl: "",
        itemIds: []
    });
    const { id } = useParams()
    const navigate = useNavigate()

    const { loggedInUser } = useContext(UserContext)
    const userId = loggedInUser.id

    const [images, setImages] = useState([])
    const [items, setItems] = useState([])
    const [enemyImage, setEnemyImage] = useState({})

    const [originalEnemy, setOriginalEnemy] = useState({})

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const location = useLocation()
    const from = location?.state?.from || false

    useEffect(() => {
        getItems().then(itemList => {
            console.log(itemList)
            setItems(itemList)
            console.log(from, " FROM")
        })
    }, [])
    useEffect(() => {
        getEnemyImagesFirebase().then(imageList => {
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
        let { name, slashingDamage, piercingDamage, bluntDamage, imageUrl } = enemy
        
        if (name.length < 1) {
            window.alert("Name must be at least 1 character long")
            return
        }
        if (!slashingDamage && !piercingDamage && !bluntDamage) {
            window.alert("Enemy must have at least 1 damage type")
            return
        }
        if (name.length > 15) {
            window.alert("Name is too long")
            return
        }
        putEnemy(enemy, userId).then(data => {
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
        let {name, value} = e.target
        console.log(value, "value")
        if (isNaN(value) || !value) {value = 0}
        if (value < 0 || value > 9999) { // Example limit
            console.log('Value cannot be less than 0 or greater than 9999')
            return
        } 
        if (name == "minLevel") {
            if (value > enemy.maxLevel) {
                return
            }
        }
        if (name == "maxLevel") {
            if (value < enemy.minLevel) {
                return
            }
        }
        if (name == "minGold") {
            if (value > enemy.maxGold) {
                return
            }
        }
        if (name == "maxGold") {
            if (value < enemy.minGold) {
                return
            }
        }
        setEnemy({...enemy, [name]: parseInt(value)})
    }

    return (
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
                    from={from}
            />
    );
}
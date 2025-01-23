import { useEffect, useState } from "react";
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, Input } from "reactstrap"


export const FormModal = ({ setEnemyImage, enemyImage, setEnemy, enemy, setImages, images, handleTextInput }) => {
    const [selectedImage, setSelectedImage] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        setSelectedImage(enemy.imageUrl)
    }, [enemy.imageUrl])

    return (
            <FormGroup className="d-flex justify-content-center">
                <Modal isOpen={isOpen} toggle={() => {
                    toggleModal()
                    setEnemyImage(enemy.imageUrl)
                }}>
                    <ModalHeader toggle={() => {
                        toggleModal()
                        setEnemyImage(enemy.imageUrl)
                    }}
                    >Header
                    </ModalHeader>
                    
                    <ModalBody>
                        {images?.map((image, i) => {
                            return (<img 
                                key={i} 
                                src={image} 
                                alt={"NO IMAGE"} 
                                style={{maxWidth: "80px"}}
                                className="mx-1"
                                border="2px solid black"
                                onClick={() => {
                                    setSelectedImage(image)
                                }}
                                />)
                            }
                        )}
                    </ModalBody>

                    <ModalFooter className="d-flex justify-content-center">
                        <Button 
                            color="danger" 
                            onClick={() => {
                                toggleModal()
                                console.log(enemy.imageUrl)
                                setSelectedImage(enemy.imageUrl)
                                }
                            }
                            >Cancel</Button>

                        <Button 
                            color="primary" 
                            onClick={() => {
                                toggleModal()
                                setEnemy(prev => ({...prev, imageUrl: selectedImage}))
                                }}
                            >Confirm</Button>
                    </ModalFooter>
                </Modal>
                    <Card
                        onClick={toggleModal}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            name: "image",
                            minWidth: "200px",
                            height: "200px",
                            cursor: "pointer",
                            border: "6px ridge grey",
                            backgroundImage: `url(${selectedImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        >
                        {selectedImage == null || selectedImage == undefined ? <span>Select Image</span> : ""}
                    </Card>
            </FormGroup>

    )
}
import { useState } from "react";
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card } from "reactstrap"


export const FormModal = ({ setEnemyImage, enemyImage, setEnemy, enemy, setImages, images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    
    return (
            <FormGroup className="d-flex justify-content-center">
                <Modal isOpen={isOpen} toggle={() => {
                    toggleModal()
                    setEnemyImage(enemy.image)
                }}>
                    <ModalHeader toggle={() => {
                        toggleModal()
                        setEnemyImage(enemy.image)
                    }}
                    >Header
                    </ModalHeader>
                    
                    <ModalBody>
                        {images?.map(image => {
                            return (<img 
                                key={image.id} 
                                src={image.imageLocation} 
                                // src={image} 
                                alt={"NO IMAGE"} 
                                style={{maxWidth: "80px"}}
                                className="mx-1"
                                border="2px solid black"
                                onClick={() => {
                                    setEnemyImage(image)
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
                                console.log(enemy.image)
                                setEnemyImage(enemy.image)
                                }
                            }
                            >Cancel</Button>

                        <Button 
                            color="primary" 
                            onClick={() => {
                                toggleModal()
                                setEnemy(prev => ({...prev, imageId: enemyImage.id, image: enemyImage}))
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
                            maxHeight: "200px",
                            cursor: "pointer",
                            backgroundImage: `url(${enemyImage?.imageLocation})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        >
                        {enemyImage == null || enemyImage == undefined ? <span>Select Image</span> : ""}
                    </Card>
            </FormGroup>

    )
}
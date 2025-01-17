import { useState } from "react";
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"


export const FormModal = ({ setEnemyImage, enemyImage, setEnemy, enemy, setAllImages, allImages }) => {
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
                    {console.log(allImages, ' ALL IMAGES')}
                    {allImages?.map(image => {
                        console.log(image)
                        return (<img 
                            key={image.id} 
                            src={image.imageLocation} 
                            alt={"NO IMAGE"} 
                            style={{maxWidth: "80px"}}
                            className="mx-1"
                            border="2px solid black"
                            onClick={() => {
                                // setNewEnemy(prev => ({...prev, imageId: image.id, image: image}))
                                console.log(allImages, ' ALL IMAGES')
                                setEnemyImage(image)
                                console.log("test")
                            }
                            }
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
            <div
                onClick={toggleModal}
                style={{
                    name: "image",
                    minWidth: "200px",
                    minHeight: "200px",
                    border: "8px solid grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundImage: `url(${enemyImage?.imageLocation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                >
                {enemyImage == null || enemyImage == undefined ? <span>Select Image</span> : ""}
            </div>
        </FormGroup>
    )
}
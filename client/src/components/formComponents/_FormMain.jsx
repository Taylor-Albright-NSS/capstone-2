import { Button, Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter, Card } from "reactstrap";
import { FormModal } from "../formComponents/FormModal";
import { Fieldset1 } from "../formComponents/Fieldset1";
import { Fieldset2 } from "../formComponents/Fieldset2";
import { FieldsetDefense } from "../formComponents/FieldsetDefense";
import { FieldsetOffense } from "../formComponents/FieldsetOffense";
import { FieldsetItemDrops } from "../formComponents/FieldsetItemDrops";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





export const FormMain = ({handleSubmit, setEnemy, enemy, setImages, images, handleTextInput, handleNumberInput, handleCheckbox, handleItemDropsChange, items, isCreateButton}) => {
    const navigate = useNavigate()
    const [warning, setWarning] = useState({ visible: false, message: '', x: 0, y:0 })

    const handlePositionLogging = (e) => {
        console.log(e)
        setWarning({...warning, visible: true})
        setTimeout(() => {
            setWarning({...warning, visible: false})
        }, 1000)
    }

    return (
        <>
            <Form className="my-4 mx-4" onSubmit={handleSubmit} style={{border: "2px solid black"}}>
                <Row className="justify-content-center mx-4" style={{border: "2px solid green"}}>
                    <Col className="col-7" style={{border: "2px solid red"}}>
                        {/*ROW 1*/}
                        <Row style={{border: "2px solid yellow", padding: "1rem"}}>
                            <Col className="d-flex justify-content-evenly">
                                    <FormModal setEnemy={setEnemy} enemy={enemy} setImages={setImages} images={images} />
                                    <Fieldset1 enemy={enemy} handleTextInput={handleTextInput} handleNumberInput={handleNumberInput} handlePositionLogging={handlePositionLogging} />
                                    <Fieldset2 handleNumberInput={handleNumberInput} handleTextInput={handleTextInput} enemy={enemy} />
                            </Col>
                        </Row>
                        {/*ROW 2*/}
                        <Row style={{border: "2px solid yellow"}}>

                            <Col style={{border: "2px solid blue"}}>
                                <FieldsetOffense handleCheckbox={handleCheckbox} enemy={enemy} handleNumberInput={handleNumberInput} />
                            </Col>
                            <Col style={{border: "2px solid blue"}}>
                                <FieldsetDefense handleNumberInput={handleNumberInput} enemy={enemy} />
                            </Col>

                                
                        </Row>
                    </Col>
                    <Col style={{border: "2px solid blue"}}>
                        <FieldsetItemDrops handleItemDropsChange={handleItemDropsChange} items={items} handleNumberInput={handleNumberInput} enemy={enemy} />
                    </Col>
                    <Row className="justify-content-center">
                        {isCreateButton ? 
                        <Button style={{maxWidth: "400px"}}>Create Enemy</Button>
                        :
                        <>
                        <Button style={{maxWidth: "200px"}}>Confirm Edits</Button>
                        <Button style={{maxWidth: "200px"}} onClick={() => navigate("/enemy-list")}>Back</Button>
                        </>
                    }
                    </Row>
                </Row>
            </Form>
            {warning.visible && (
                <div className="warning-message" style={{ top: warning.y, left: warning.x }}>
                    {warning.message}fdsafasd
                </div>
            )}
        </>
    );
}
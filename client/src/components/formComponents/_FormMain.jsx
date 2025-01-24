import { Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter, Card, Container } from "reactstrap";
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
        <Container style={{height: "800px"}} className="d-flex justify-content-center">
            <Form className="my-4 mx-4 col-11" onSubmit={handleSubmit} style={{backdropFilter: "blur(10px)", border: "8px solid black"}}>
                <Row className="justify-content-center mx-4">
                    <Col md="9">
                        {/*ROW 1*/}
                        <Row className="d-flex align-items-center" style={{border: "8px ridge grey"}}>
                            <Col>
                                <FormModal setEnemy={setEnemy} enemy={enemy} setImages={setImages} images={images} handleTextInput={handleTextInput} />
                            </Col>
                            <Col>
                                <Fieldset1 enemy={enemy} handleTextInput={handleTextInput} handleNumberInput={handleNumberInput} handlePositionLogging={handlePositionLogging} />
                            </Col>
                            <Col>
                                <Fieldset2 handleNumberInput={handleNumberInput} handleTextInput={handleTextInput} enemy={enemy} />
                            </Col>
                        </Row>
                        {/*ROW 2*/}
                        <Row className="d-flex justify-content-center">
                            <Col className="d-flex justify-content-center align-items-center" style={{border: "6px ridge grey"}}>
                                <FieldsetOffense handleCheckbox={handleCheckbox} enemy={enemy} handleNumberInput={handleNumberInput} />
                            </Col>
                            <Col style={{border: "6px ridge grey"}}>
                                <FieldsetDefense handleNumberInput={handleNumberInput} enemy={enemy} />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{border: "8px ridge grey"}}>
                        <FieldsetItemDrops handleItemDropsChange={handleItemDropsChange} items={items} handleNumberInput={handleNumberInput} enemy={enemy} />
                    </Col>
                    <Row className="justify-content-center">
                        {isCreateButton ? 
                        <button style={{maxWidth: "400px"}}>Create Enemy</button>
                        :
                        <>
                        <button style={{maxWidth: "200px"}}>Confirm Edits</button>
                        <button style={{maxWidth: "200px"}} onClick={(e) => {
                            e.preventDefault()
                            navigate("/enemy-list")
                            }}>Back</button>
                        </>
                    }
                    </Row>
                </Row>
            </Form>
            {warning.visible && (
                <div className="warning-message" style={{ top: warning.y, left: warning.x }}>
                    {warning.message}
                </div>
            )}
        </Container>
    );
}
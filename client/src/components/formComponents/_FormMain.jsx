import { Button, Form, FormGroup, Input, Label, Row, Col, ModalHeader, ModalBody, ModalFooter, Card } from "reactstrap";
import { FormModal } from "../formComponents/FormModal";
import { Fieldset1 } from "../formComponents/Fieldset1";
import { Fieldset2 } from "../formComponents/Fieldset2";
import { FieldsetDefense } from "../formComponents/FieldsetDefense";
import { FieldsetOffense } from "../formComponents/FieldsetOffense";
import { FieldsetItemDrops } from "../formComponents/FieldsetItemDrops";


export const FormMain = ({handleSubmit,setEnemyImage, enemyImage, setEnemy, enemy, setImages, images, handleTextInput, handleNumberInput, handleCheckbox, handleItemDropsChange, items   }) => {

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
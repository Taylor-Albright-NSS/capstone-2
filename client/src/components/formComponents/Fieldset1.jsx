import { FormGroup, Label, Input, Card } from "reactstrap"

export const Fieldset1 = ({ enemy, handleTextInput, handleNumberInput, handlePositionLogging }) => {


    return (
        <Card  className="d-flex align-items-center flex-column">
            <fieldset>
                <FormGroup className="d-flex align-items-center flex-column">
                    <Label for="name">Name</Label>
                    <Input style={{maxWidth: "160px"}} type="text" name="name" id="name" value={enemy.name} onChange={handleTextInput}/>
                </FormGroup>
                <FormGroup className="d-flex flex-column align-items-center" style={{maxWidth: "200px"}}>
                        <Label for="description">Enemy Description</Label>
                        <Input style={{resize: "none"}} type="textarea" name="description" id="description" onChange={handleTextInput} value={enemy.description}></Input>
                    </FormGroup>
            </fieldset>
        </Card>
    )
}
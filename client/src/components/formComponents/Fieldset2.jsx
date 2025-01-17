import { FormGroup, Label, Input, Card } from "reactstrap"

export const Fieldset2 = ({ handleNumberInput, handleTextInput }) => {
    return (
        <Card>
            <fieldset>
                <FormGroup className="d-flex flex-column align-items-center ">
                    <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" onChange={handleNumberInput} />
                </FormGroup>
                <FormGroup>Gold placeholder</FormGroup>
                <FormGroup style={{maxWidth: "200px"}}>
                    <Label for="description">Enemy Description</Label>
                    <Input style={{resize: "none"}} type="textarea" name="description" id="description" onChange={handleTextInput}></Input>
                </FormGroup>
            </fieldset>
        </Card>
    )
}
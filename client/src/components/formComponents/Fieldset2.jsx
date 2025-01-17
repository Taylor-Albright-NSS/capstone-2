import { FormGroup, Label, Input } from "reactstrap"

export const Fieldset2 = ({ handleNumberInput }) => {
    return (
        <fieldset>
            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="baseDamage">Base Damage</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" onChange={handleNumberInput} />
            </FormGroup>

            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="baseHealth">Base Health</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" onChange={handleNumberInput} />
            </FormGroup>

            <FormGroup className="d-flex flex-column align-items-center ">
                <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" onChange={handleNumberInput} />
            </FormGroup>
        </fieldset>
    )
}
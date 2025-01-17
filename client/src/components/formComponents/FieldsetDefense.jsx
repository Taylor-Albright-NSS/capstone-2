import { FormGroup, Label, Input } from "reactstrap"

export const FieldsetDefense = ({ handleNumberInput, enemy }) => {
    return (
        <fieldset>
            <legend style={{textAlign: "center"}}>Defense</legend>
            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="baseHealth">Base Health</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" onChange={handleNumberInput} value={enemy.baseHealth} />
            </FormGroup>
            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="slashingArmor">Slashing Armor</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="slashingArmor" id="slashingArmor" onChange={handleNumberInput} value={enemy.slashingArmor} />
            </FormGroup>

            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="piercingArmor">Piercing Armor</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="piercingArmor" id="piercingArmor" onChange={handleNumberInput} value={enemy.piercingArmor} />
            </FormGroup>

            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="bluntArmor">Blunt Armor</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="bluntArmor" id="bluntArmor" onChange={handleNumberInput} value={enemy.bluntArmor} />
            </FormGroup>
        </fieldset>
    )
}
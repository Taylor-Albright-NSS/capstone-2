import { FormGroup, Label, Input } from "reactstrap"

export const FieldsetDamageTypes = ({ handleCheckbox, enemy, handleNumberInput }) => {
    return (
        <fieldset>
            <legend>Damage</legend>
            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="baseDamage">Base Damage</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" onChange={handleNumberInput} />
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="slashingDamage" onChange={handleCheckbox} checked={enemy.slashingDamage || false}/>
                    Slashing
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="piercingDamage" onChange={handleCheckbox} checked={enemy.piercingDamage || false}/>
                    Piercing
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="bluntDamage" onChange={handleCheckbox} checked={enemy.bluntDamage || false}/>
                    Blunt
                </Label>
            </FormGroup>
        </fieldset>
    )
}
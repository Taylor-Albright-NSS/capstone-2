import { FormGroup, Label, Input } from "reactstrap"

export const FieldsetDamageTypes = ({ handleCheckbox, enemy }) => {
    return (
        <fieldset>
            <legend>Damage Types</legend>
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
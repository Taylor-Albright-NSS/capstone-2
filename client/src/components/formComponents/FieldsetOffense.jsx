import { FormGroup, Label, Input, Card } from "reactstrap"

export const FieldsetOffense = ({ handleCheckbox, enemy, handleNumberInput }) => {
    return (
        <Card className="d-flex flex-column align-items-center">
            <fieldset>
                <legend style={{textAlign: "center"}}>Offense</legend>
                <FormGroup>
                    <Label for="baseDamage">Base Damage</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="baseDamage" id="baseDamage" onChange={handleNumberInput}  value={enemy.baseDamage} />
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
        </Card>
    )
}
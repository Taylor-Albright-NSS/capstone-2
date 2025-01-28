import { FormGroup, Label, Input, Card, Row, Col } from "reactstrap"

export const FieldsetOffense = ({ handleCheckbox, enemy, handleNumberInput }) => {
    return (
        <Card className="d-flex flex-column align-items-center">
            <fieldset>
                <legend style={{border: "4px outset grey", textAlign: "center"}}>Offense</legend>
                <FormGroup className="d-flex flex-column align-items-center" style={{margin: 0}}>
                    <Label for="attackPower">Attack Power</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="attackPower" id="attackPower" onChange={handleNumberInput}  value={enemy.attackPower} />
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
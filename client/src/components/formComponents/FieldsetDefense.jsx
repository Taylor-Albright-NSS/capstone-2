import { FormGroup, Label, Input, Row, Col } from "reactstrap"

export const FieldsetDefense = ({ handleNumberInput, enemy }) => {
    return (
        <fieldset>
            <legend style={{textAlign: "center"}}>Defense</legend>
            <Row>
                <Col>
            <FormGroup className="d-flex flex-column align-items-center">
                <Label for="baseHealth">Base Health</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseHealth" id="baseHealth" onChange={handleNumberInput} value={enemy.baseHealth} />
            </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
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
                </Col>

                <Col>
                <FormGroup className="d-flex flex-column align-items-center">
                        <Label for="fireResist">Fire Resist</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="fireResist" id="fireResist" onChange={handleNumberInput} value={enemy.fireResist} />
                    </FormGroup>

                    <FormGroup className="d-flex flex-column align-items-center">
                        <Label for="iceResist">Ice Resist</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="iceResist" id="iceResist" onChange={handleNumberInput} value={enemy.iceResist} />
                    </FormGroup>

                    <FormGroup className="d-flex flex-column align-items-center">
                        <Label for="lightningResist">Lightning Resist</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="lightningResist" id="lightningResist" onChange={handleNumberInput} value={enemy.lightningResist} />
                    </FormGroup>
                </Col>
            </Row>
        </fieldset>
    )
}
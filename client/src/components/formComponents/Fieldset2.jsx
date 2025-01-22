import { FormGroup, Label, Input, Card } from "reactstrap"

export const Fieldset2 = ({ handleNumberInput, handleTextInput, enemy }) => {
    return (
        <Card>
            <fieldset>
                <span className="d-flex justify-content-around">
                    <FormGroup>
                        <Label for="minLevel">Min. Level</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="minLevel" id="minLevel" value={enemy.minLevel} onChange={handleNumberInput} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="maxLevel">Max Level</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" value={enemy.maxLevel} onChange={handleNumberInput} />
                    </FormGroup>
                </span>
                <FormGroup className="d-flex flex-column align-items-center">
                    <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" onChange={handleNumberInput} value={enemy.baseExperience} />
                </FormGroup>

                <FormGroup className="d-flex flex-column align-items-center">
                    <Label style={{textAlign: "center"}} for="minGold">Min. Gold</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="minGold" id="minGold" onChange={handleNumberInput} value={enemy.minGold} />
                </FormGroup>
                <FormGroup className="d-flex flex-column align-items-center">
                    <Label style={{textAlign: "center"}} for="maxGold">Max. Gold</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="maxGold" id="maxGold" onChange={handleNumberInput} value={enemy.maxGold} />
                </FormGroup>
            </fieldset>
        </Card>
    )
}
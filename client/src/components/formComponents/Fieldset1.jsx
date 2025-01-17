import { FormGroup, Label, Input } from "reactstrap"

export const Fieldset1 = ({ enemy, handleTextInput, handleNumberInput }) => {
    return (
        <fieldset>
            <FormGroup className="d-flex align-items-center flex-row">
                <Label for="name">Name</Label>
                <Input style={{width: "200px"}} type="text" name="name" id="name" value={enemy.name} onChange={handleTextInput}/>
            </FormGroup>

            <FormGroup>
                <Label for="minLevel">Min. Level</Label>
                <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" onChange={handleNumberInput} />
            </FormGroup>

            <FormGroup>
                <Label for="maxLevel">Max Level</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" onChange={handleNumberInput} />
            </FormGroup>
        </fieldset>
    )
}
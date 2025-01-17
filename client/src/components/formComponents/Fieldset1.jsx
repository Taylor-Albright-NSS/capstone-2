import { FormGroup, Label, Input } from "reactstrap"

export const Fieldset1 = ({ enemy, handleTextInput, handleNumberInput }) => {
    return (
        <fieldset className="col-4" style={{border: "2px solid pink"}}>
            <FormGroup className="d-flex align-items-center flex-column">
                <Label for="name">Name</Label>
                <Input style={{width: "200px"}} type="text" name="name" id="name" value={enemy.name} onChange={handleTextInput}/>
            </FormGroup>

            <FormGroup className="d-flex justify-content-center">
                <Label for="name">Type (placeholder)</Label>
            </FormGroup>

            <span className="d-flex justify-content-around">
                <FormGroup>
                    <Label for="minLevel">Min. Level</Label>
                    <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" onChange={handleNumberInput} />
                </FormGroup>

                <FormGroup>
                    <Label for="maxLevel">Max Level</Label>
                    <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" onChange={handleNumberInput} />
                </FormGroup>
            </span>
        </fieldset>
    )
}
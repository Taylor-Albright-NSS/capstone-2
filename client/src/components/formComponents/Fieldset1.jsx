import { FormGroup, Label, Input, Card } from "reactstrap"

export const Fieldset1 = ({ enemy, handleTextInput, handleNumberInput, handlePositionLogging }) => {


    return (
        <Card>
            <fieldset>
                <FormGroup className="d-flex align-items-center flex-column">
                    <Label for="name">Name</Label>
                    <Input style={{maxWidth: "100px"}} type="text" name="name" id="name" value={enemy.name} onChange={handleTextInput}/>
                </FormGroup>

                <FormGroup className="d-flex justify-content-center">
                    <Label for="type">Type (placeholder)</Label>
                </FormGroup>

                <span className="d-flex justify-content-around">
                    <FormGroup>
                        <Label for="minLevel">Min. Level</Label>
                        <Input style={{width: "76px"}} type="number" name="minLevel" id="minLevel" value={enemy.minLevel} onChange={handleNumberInput} onClick={handlePositionLogging} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="maxLevel">Max Level</Label>
                        <Input style={{maxWidth: "76px"}} type="number" name="maxLevel" id="maxLevel" value={enemy.maxLevel} onChange={handleNumberInput} />
                    </FormGroup>
                </span>
            </fieldset>
        </Card>
    )
}
import { FormGroup, Label, Input, Col } from "reactstrap"

export const FieldsetItemDrops = ({ handleItemDropsChange, items, handleNumberInput }) => {
    return (
        <fieldset>
            <legend>Item Drops</legend>
            {items && items.map(item => 
                    (
                    <Col key={item.id} xs="12" sm="6" md="4" lg="3">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name={`item-${item.id}`} value={item.id} onChange={handleItemDropsChange} />
                                {item.name}
                            </Label>
                        </FormGroup>
                    </Col>
                )
            )}
            <FormGroup className="d-flex flex-column align-items-center ">
                <Label style={{textAlign: "center"}} for="baseExperience">Base Experience</Label>
                <Input style={{maxWidth: "76px"}} type="number" name="baseExperience" id="baseExperience" onChange={handleNumberInput} />
            </FormGroup>
            <FormGroup>Gold placeholder</FormGroup>
        </fieldset>
    )
}
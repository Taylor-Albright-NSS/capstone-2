import { FormGroup, Label, Input, Col } from "reactstrap"

export const FieldsetItemDrops = ({ handleItemDropsChange, items, handleNumberInput }) => {
    return (
        <fieldset>
            <legend style={{textAlign: "center"}}>Item Drops</legend>
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
        </fieldset>
    )
}
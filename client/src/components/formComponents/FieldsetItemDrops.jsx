import { FormGroup, Label, Input, Col, Row } from "reactstrap"

export const FieldsetItemDrops = ({ handleItemDropsChange, items, handleNumberInput, enemy }) => {
    return (
        <fieldset>
            <legend style={{textAlign: "center"}}>Item Drops</legend>
            {items && items.map(item => 
                    (
                    <Row key={item.id} xs="12" sm="6" md="4" lg="3">
                        <FormGroup className="d-flex align-items-center" check>
                            <Label check>
                                <Input checked={enemy?.itemIds?.includes(item.id)} type="checkbox" name={`item-${item.id}`} value={item.id} onChange={handleItemDropsChange} />
                                {item.name}
                            </Label>
                        </FormGroup>
                    </Row>
                )
            )}
        </fieldset>
    )
}
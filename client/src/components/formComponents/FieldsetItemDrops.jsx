import { FormGroup, Label, Input, Col, Row, Card } from "reactstrap"

export const FieldsetItemDrops = ({ handleItemDropsChange, items, handleNumberInput, enemy }) => {
    return (
        <fieldset>
            <legend style={{textAlign: "center"}}>Item Drops</legend>
            {items && items.map(item => 
                    (
                    <FormGroup key={item.id} check>
                        <Label check>
                            <Input checked={enemy?.itemIds?.includes(item.id)} type="checkbox" name={`item-${item.id}`} value={item.id} onChange={handleItemDropsChange} />
                            <p style={{margin: 0, maxWidth: "200px", color: "white"}}>{item.name}</p>
                        </Label>
                    </FormGroup>
                    )
            )}
        </fieldset>
    )
}
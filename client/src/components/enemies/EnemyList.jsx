import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ApplicationViews";
import { Col, Container, Input, Row } from "reactstrap";
import { getEnemies } from "../../managers/enemyManager";
import { EnemyCard } from "./EnemyCard";

export const EnemyList = () => {
    const [enemies, setEnemies] = useState([]);
    const [filteredEnemies, setFilteredEnemies] = useState([]);
    const [minLevelFilter, setMinLevelFilter] = useState(1)

    const { loggedInUser } = useContext(UserContext)
    const { test } = useContext(UserContext)

    useEffect(() => {
        getEnemies().then(enemyList => {
            console.log(enemyList)
            setEnemies(enemyList)
            setFilteredEnemies(enemyList)
        })
    }, [])

    const filterByLevel = (e) => {
        const targetLevel = parseInt(e.target.value)
        console.log(targetLevel, " target level")
        if (targetLevel <= 0) {
            return
        } else {
            setMinLevelFilter(targetLevel)
            const filteredEnemies = enemies.filter(e => e.minLevel >= targetLevel)
            setFilteredEnemies(filteredEnemies)
        }
    }

    return (
        <Container style={{height: "800px", overflow: "hidden", overflowY: "auto", padding: "2rem", border: "4px solid green"}}>
            <Row className="mt-4">
                <Col className="p-2 bg-primary d-flex justify-content-around">
                        <span className="d-flex align-items-center">
                            <p style={{margin: 0}}>Filter Min Level</p>
                            <Input style={{width: "80px"}} type="number" value={minLevelFilter} onChange={filterByLevel}/>
                        </span>
                        <p style={{margin: 0}}>Filter2</p>
                        <p style={{margin: 0}}>Filter3</p>
                        <p style={{margin: 0}}>Filter4</p>
                </Col>
            </Row>
            <Row className="mt-4" style={{border: "4px solid black"}}>
                {filteredEnemies.map(enemy => {
                    return(
                    // <Col key={enemy.id}>
                        <EnemyCard key={enemy.id} enemy={enemy} setEnemies={setEnemies} />
                    // </Col>

                    )
                })}
            </Row>
        </Container>
    );
}
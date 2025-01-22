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
        })
    }, [])
    
    useEffect(() => {
        getEnemies().then(enemyList => {
            setFilteredEnemies(enemyList)
        })
    }, [enemies])

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
        <Container style={{height: "780px", padding: "2rem", border: "4px solid green"}}>
            <Row>
                <Col className="p-2 bg-primary d-flex justify-content-start">
                        <span className="d-flex align-items-center justify-content-between" style={{width: "40%"}}>
                            <p style={{margin: 0, fontSize: "20px"}}>Browse Enemies</p>
                            <span className="d-flex align-items-center">
                                <p style={{marginBottom: 0, marginRight: "2rem"}}>Filter Min Level</p>
                                <Input style={{width: "80px"}} type="number" value={minLevelFilter} onChange={filterByLevel}/>
                            </span>
                        </span>

                </Col>
            </Row>
            <Row className="mt-4" style={{height: "90%", overflow: "hidden", overflowY: "auto", backdropFilter: "blur(15px)", border: "4px solid black"}}>
                {filteredEnemies.map(enemy => {
                    return(
                        <EnemyCard key={enemy.id} enemy={enemy} setEnemies={setEnemies} />
                    )
                })}
            </Row>
        </Container>
    );
}
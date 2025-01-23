import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ApplicationViews";
import { Col, Container, Input, Row } from "reactstrap";
import { getEnemies } from "../../managers/enemyManager";
import { EnemyCard } from "./EnemyCard";

export const EnemyList = () => {
    const [enemies, setEnemies] = useState([]);
    const [filteredEnemies, setFilteredEnemies] = useState([]);
    const [minLevelFilter, setMinLevelFilter] = useState(1)
    const [searchString, setSearchString] = useState("")

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

    const filterByName = (e) => {
        const searchInput = e.target.value.toLowerCase()
        setSearchString(searchInput)
        console.log(searchInput)
        console.log(enemies)
        const filteredEnemies = enemies.filter(enemy => enemy.name.toLowerCase().includes(searchInput))
        setFilteredEnemies(filteredEnemies)
    }

    return (
        <Container className="enemy-list-background d-flex flex-column align-content-center" style={{height: "780px", border: "6px ridge grey"}}>
            <Row>
                <Col className="bg-black d-flex justify-content-end" style={{height: "40px"}}>
                        <span className="d-flex align-items-center justify-content-between" style={{width: "56%"}}>
                            <h6 style={{margin: 0, fontSize: "20px"}}>Browse Enemies</h6>
                            <span className="d-flex align-items-center">
                                <p style={{marginBottom: 0, marginRight: "1rem", fontSize: "12px"}}>Filter By Level</p>
                                <Input style={{width: "60px", height: "30px"}} type="number" value={minLevelFilter} onChange={filterByLevel}/>
                            </span>
                            <span className="d-flex align-items-center">
                                <p style={{marginBottom: 0, marginRight: "1rem"}}>Search</p>
                                <Input style={{width: "200px", height: "30px"}} type="text" value={searchString} onChange={filterByName}/>
                            </span>
                        </span>

                </Col>
            </Row>
            <Row className="enemy-list-background" style={{height: "100%", overflow: "hidden", overflowY: "auto", border: "4px ridge black"}}>
                {filteredEnemies.map(enemy => {
                    return(
                        <EnemyCard key={enemy.id} enemy={enemy} setEnemies={setEnemies} />
                    )
                })}
            </Row>
        </Container>
    );
}
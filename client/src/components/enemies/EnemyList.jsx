import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ApplicationViews";
import { Col, Container, Input, Row } from "reactstrap";
import { getEnemies } from "../../managers/enemyManager";
import { EnemyCard } from "./EnemyCard";
import { useLocation } from "react-router-dom";

export const EnemyList = () => {
    const [enemies, setEnemies] = useState([]);
    const [filteredEnemies, setFilteredEnemies] = useState([]);
    const [minLevelFilter, setMinLevelFilter] = useState(1)
    const [searchString, setSearchString] = useState("")

    const { loggedInUser } = useContext(UserContext)



    useEffect(() => {
        getEnemies().then(enemyList => {
            console.log(enemyList)
            setEnemies(enemyList)
        })
    }, [])
    
    useEffect(() => {
        getEnemies().then(enemyList => {
            enemyList.sort((a, b) => a.minLevel - b.minLevel)
            setFilteredEnemies(enemyList)
        })
    }, [enemies])

    const filterByLevel = (e) => {
        let targetLevel = parseInt(e.target.value)
        console.log(targetLevel, " target level")
        if (isNaN(targetLevel) || !targetLevel) {targetLevel = 1}
        if (targetLevel <= 0) {
            return
        } else {
            setMinLevelFilter(targetLevel)
            const filteredEnemies = enemies.filter(e => e.minLevel >= targetLevel)
            filteredEnemies.sort((a, b) => a.minLevel - b.minLevel)
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
        <Container className="enemy-list-border enemy-list-background d-flex flex-column align-content-center" style={{height: "780px", border: "6px ridge grey"}}>
            <Row>
                <Col className="bg-black d-flex justify-content-end" style={{height: "40px"}}>
                            <span className="d-flex justify-content-end align-items-center" style={{width: "100%", maxWidth: "200px"}}>
                                <h6 style={{marginBottom: 0, marginRight: "0rem", fontSize: "20px"}}>Browse Enemies</h6>
                            </span>
                        <span className="d-flex align-items-center justify-content-end" style={{width: "56%"}}>
                            <span className="d-flex align-items-center">
                                <p style={{marginBottom: 0, marginRight: "1rem", fontSize: "12px"}}>Filter By Level</p>
                                <Input style={{maxWidth: "60px", width: "100%", height: "30px"}} type="number" value={minLevelFilter} onChange={filterByLevel}/>
                            </span>
                            <span className="d-flex align-items-center">
                                <p style={{marginBottom: 0, marginRight: "1rem"}}>Search</p>
                                <Input style={{maxWidth: "200px", width: "100%", height: "30px"}} type="text" value={searchString} onChange={filterByName}/>
                            </span>
                        </span>

                </Col>
            </Row>
            <Row className="enemy-list-background" style={{height: "100%", overflow: "hidden", overflowY: "auto", border: "8px ridge black"}}>
                {filteredEnemies.map(enemy => {
                    return(
                        <EnemyCard key={enemy.id} enemy={enemy} setEnemies={setEnemies} />
                    )
                })}
            </Row>
        </Container>
    );
}
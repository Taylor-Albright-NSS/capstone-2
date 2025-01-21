import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ApplicationViews";
import { Col, Container, Row } from "reactstrap";
import { getEnemies } from "../../managers/enemyManager";
import { EnemyCard } from "./EnemyCard";

export const EnemyList = () => {
    const [enemies, setEnemies] = useState([]);

    const { loggedInUser } = useContext(UserContext)
    const { test } = useContext(UserContext)

    useEffect(() => {
        getEnemies().then(enemyList => {
            console.log(enemyList)
            setEnemies(enemyList)
        })
    }, [])

    return (
        <Container style={{height: "800px", overflow: "hidden", overflowY: "auto"}}>
            <Row className="mt-4">
                <Col>
                    <div className="p-1 bg-primary text-white text-center border border-danger">
                        <h1>Filters and search bar placeholder</h1>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                {enemies.map(enemy => {
                    return(
                    <Col key={enemy.id}>
                        <EnemyCard  enemy={enemy} setEnemies={setEnemies} />
                    </Col>

                    )
                })}
            </Row>
        </Container>
    );
}
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
            setEnemies(enemyList)
        })
    }, [])

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <div className="p-1 bg-primary text-white text-center border border-danger">
                        <h1>Filters and search bar</h1>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                {enemies.map(enemy => (
                    <Col key={enemy.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
                        <EnemyCard enemy={enemy} setEnemies={setEnemies} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
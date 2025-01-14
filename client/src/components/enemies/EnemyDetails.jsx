import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEnemy } from "../../managers/enemyManager";
import { CardImg, Col, Container, Row } from "reactstrap";

export const EnemyDetails = () => {
    const [enemy, setEnemy] = useState()
    const { id } = useParams()
    useEffect(() => {
        getEnemy(id).then(enemy => {
            console.log(enemy)
            setEnemy(enemy)
        })
    }, [id])
    return (
        <Container>
                        <h3>Enemy Details Page</h3>
            <Row>
                <Col>
                    <div className="container" style={{ maxWidth: "500px" }}>
                        <img src={`/${enemy?.image?.imageLocation}`} alt={enemy?.name} />
                        <h1>name: {enemy?.name}</h1>
                    </div>

                    <div className="container" style={{ maxWidth: "500px" }}>
                        <h3>Details</h3>
                        <p style={{marginBottom: 0}}>Level range: {enemy.minLevel + " - " + enemy.maxLevel}</p>
                        <p style={{marginBottom: 0}}>Base Health: {enemy.baseHealth}</p>
                        <p style={{marginBottom: 0}}>Base experience: {enemy.baseExperience}</p>
                        <p style={{marginBottom: 0}}>Slashing Armor: {enemy.slashingArmor}</p>
                        <p style={{marginBottom: 0}}>Piercing Armor: {enemy.piercingArmor}</p>
                        <p style={{marginBottom: 0}}>Blunt Armor: {enemy.bluntArmor}</p>
                        <p style={{marginBottom: 0}}>Base experience: {enemy.baseExperience}</p>
                    </div>
                </Col>

                <Col>
                    <div className="container" style={{ maxWidth: "500px" }}>
                        <h3>Enemy Stats information</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
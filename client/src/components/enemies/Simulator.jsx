import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardColumns, CardGroup, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { getEnemy } from "../../managers/enemyManager";
import { useParams } from "react-router-dom";


export const Simulator = () => {
    const playerBase = {
        baseHealth: 1,
        baseDamage: 0,
        slashingArmor: 0,
        piercingArmor: 0,
        bluntArmor: 0,
        slashingPenetration: 0,
        piercingPenetration: 0,
        bluntPenetration: 0,
        dodgeRating: 0,
        accuracyRating: 0,
    }
    const [enemy, setEnemy] = useState({})
    const [simEnemy, setSimEnemy] = useState({})
    const [player, setPlayer] = useState({})
    const [simPlayer, setSimPlayer] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getEnemy(id).then(enemy => {
            enemy.actualLevel = enemy.minLevel
            setEnemy(enemy)
            setSimEnemy(enemy)
        })
    }, [id])

    useEffect(() => {
        setPlayer(playerBase)
        setSimPlayer(playerBase)
    })

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
     }
     function calculateStat(baseStat, level, scalingFactor) {
        const scaledValue = baseStat + (level * scalingFactor); // Random between -variance and +variance
        return Math.round(scaledValue);
    }

    //PLAYER DAMAGE CALC
	// const { attackPower, botMultiplier, topMultiplier } = player[playerWeapon.skillUsed]
	// const { botDamage, topDamage } = playerWeapon;
	// const lowDamage = Math.ceil(attackPower * (botMultiplier * botDamage));
	// const highDamage = Math.ceil(attackPower * (topMultiplier * topDamage));
	// const baseDamage = Math.max(0, randomNumberRange(lowDamage, highDamage))
	// console.log(lowDamage, 'LOW DAMAGE - RIGHT')
	// console.log(highDamage, 'HIGH DAMAGE - RIGHT', highDamage / player.currentWeaponSkill.speed, ' HIGH DPS - RIGHT')
	// console.log(baseDamage, 'CHOSEN DAMAGE - RIGHT')
	// console.log(baseDamage / player.currentWeaponSkill.speed, ' DPS - RIGHT')
	// return baseDamage    

    //base variables
    const scalingFactor = 1 //Strength is increased by 1 per level
    const { baseDamage } = enemy || 0
    const { baseExperience } = enemy || 0
    const { baseHealth } = enemy || 0
    const { actualLevel } = enemy || 0
    const { minLevel } = enemy || 0
    const { maxLevel } = enemy || 0
    const { slashingArmor } = enemy || 0
    const { piercingArmor } = enemy || 0
    const { bluntArmor } = enemy || 0
    const { fireResist } = enemy || 0
    const { iceResist } = enemy || 0
    const { lightningResist } = enemy || 0
    const dodgeRating = enemy?.dodgeRating + actualLevel || 0
    const accuracyRating = enemy?.accuracyRating + actualLevel || 0
    
    //variables to interpolate
    const botDamage = Math.floor(baseDamage * 0.5)
    const topDamage = Math.floor(baseDamage * 1.5)
    const experience = actualLevel == minLevel ? baseExperience : Math.floor((((actualLevel * 0.1) * baseExperience) + baseExperience))
    const health = actualLevel == minLevel ? baseHealth : Math.floor((((actualLevel * 0.1) * baseHealth) + baseHealth))
    
    //randomizer
    const damage = randomNumberRange(botDamage, topDamage)
    const incrementLevel = () => {
        if (enemy.actualLevel + 1 > enemy.maxLevel) {return}
        setEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel + 1}))
    }
    const decrementLevel = () => {
        if (enemy.actualLevel - 1 < enemy.minLevel) {return}
        setEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel - 1}))
    }
    const calculateDamageVsPlayer = () => {

    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Card>
                                <span className="d-flex justify-content-center">
                                    <Button onClick={decrementLevel}>Decrease Enemy Level</Button>
                                    <Button onClick={incrementLevel}>Increase Enemy Level</Button>
                                </span>
                                <CardBody>
                                    <CardText>Level: {actualLevel}</CardText>
                                    <CardText>Damage Range: {botDamage} - {topDamage}</CardText>
                                    {/* <CardText>Gold Range: {enemy?.minGold} - {enemy?.maxGold}</CardText> */}
                                    <CardText>Experience: {experience}</CardText>
                                    <CardText>----</CardText>
                                    <CardText>Health: {health}</CardText>
                                    <CardText>Dodge: {dodgeRating}</CardText>
                                    <CardText>Accuracy: {accuracyRating}</CardText>
                                    <h6>Damage Type(s)</h6>
                                    {enemy?.slashingDamage && <CardText>Slashing</CardText>}
                                    {enemy?.piercingDamage && <CardText>Piercing</CardText>}
                                    {enemy?.bluntDamage && <CardText>Blunt</CardText>}
                                    <div className="d-flex justify-content-around">
                                        <span>
                                            <CardText>Slashing Armor: {slashingArmor}</CardText>
                                            <CardText>Piercing Armor: {piercingArmor}</CardText>
                                            <CardText>Blunt Armor: {bluntArmor}</CardText>
                                        </span>
                                        <span>
                                            <CardText>Fire Resist: {fireResist}</CardText>
                                            <CardText>Ice Resist: {iceResist}</CardText>
                                            <CardText>Lightning Resist: {lightningResist}</CardText>
                                        </span>
                                    </div>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{height: "100%"}}>
                                <CardTitle style={{alignSelf: "center"}}>Player</CardTitle>
                                <CardBody>
                                    <CardText>Health: {player.baseHealth}</CardText>
                                    <CardText>Damage: {player.damage}</CardText>
                                    {/* <CardText>Gold Range: {enemy?.minGold} - {enemy?.maxGold}</CardText> */}
                                    <CardText>Slashing Armor: {player.slashingArmor}</CardText>
                                    <CardText>Piercing Armor: {player.piercingArmor}</CardText>
                                    <CardText>Blunt Armor: {player.bluntArmor}</CardText>
                                    <CardText>Slashing Penetration: {player.slashingPenetration}</CardText>
                                    <CardText>Piercing Penetration: {player.piercingPenetration}</CardText>
                                    <CardText>Blunt Penetration: {player.bluntPenetration}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <Card className="d-flex align-items-center">
                                <CardTitle>Enemy</CardTitle>
                                    <CardText>Health</CardText>
                                    <CardText>Dodge %</CardText>
                                    <CardText>Hit %</CardText>
                                    <CardText>Test</CardText>
                                    <CardText>Test</CardText>
                                    <CardText>Test</CardText>
                            </Card>
                        </Col>
                        {/* <Col className="col-7">Button Button</Col> */}
                        <Col>
                            <Card className="d-flex align-items-center">
                                <CardTitle>Player</CardTitle>
                                    <CardText>Health</CardText>
                                    <CardText>Dodge %</CardText>
                                    <CardText>Hit %</CardText>
                                    <CardText>Test</CardText>
                                    <CardText>Test</CardText>
                                    <CardText>Test</CardText>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
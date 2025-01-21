import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardColumns, CardGroup, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { getEnemy } from "../../managers/enemyManager";
import { useParams } from "react-router-dom";
import './Simulator.css'
import { app } from "../../firebase/fireBase";
import App from "../../firebase/FirebaseUploadUI";


export const Simulator = () => {
    const playerBase = {
        baseHealth: 300,
        attackPower: 5,
        slashingArmor: 5,
        piercingArmor: 10,
        bluntArmor: 20,
        slashingPenetration: 0,
        piercingPenetration: 0,
        bluntPenetration: 0,
        dodgeRating: 0,
        accuracyRating: 0,
    }
    const simEnemyBase = {
        baseHealth: 1000,
        baseDamage: 9,
        slashingArmor: 5,
        piercingArmor: 10,
        bluntArmor: 20,
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
            setSimEnemy(simEnemyBase)
        })
    }, [id])

    useEffect(() => {
        setPlayer(playerBase)
        setSimPlayer(playerBase)
    }, [])

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
     }

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

    // let armorAfterPen = enemyArmor - player[slashingPiercingOrBlunt] <= 0 ? 0 : enemyArmor - player[slashingPiercingOrBlunt]
    // const damageAfterMitigation = (damageBeforeMitigation - armorAfterPen) * (1000 / (1000 + armorAfterPen)) <= 0 ? 0 : (damageBeforeMitigation - armorAfterPen) * (1000 / (1000 + armorAfterPen))

    const incrementLevel = () => {
        if (enemy.actualLevel + 1 > enemy.maxLevel) {return}
        setEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel + 1}))
    }
    const decrementLevel = () => {
        if (enemy.actualLevel - 1 < enemy.minLevel) {return}
        setEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel - 1}))
    }
    const calculateEnemyDamage = (armorType) => {
        const playerArmor = simPlayer[armorType]
        const damageObject = {}
        damageObject.lowDamage = Math.ceil(simEnemy.baseDamage * 0.5)
        damageObject.topDamage = Math.ceil(simEnemy.baseDamage * 1.5)
        damageObject.rawDamage = randomNumberRange(damageObject.lowDamage, damageObject.topDamage)
        damageObject.actualDamage = Math.max(Math.floor((damageObject.rawDamage - playerArmor) * (1000 / (1000 + playerArmor))), 0)
        return damageObject
    }
    
    const simulateEnemyHit = (armorType) => {
        const enemyDamageObject = calculateEnemyDamage(armorType)
        const { actualDamage } = enemyDamageObject
        const { rawDamage } = enemyDamageObject
        const blockedDamage = rawDamage - actualDamage
        const playerNewHealth = Math.max(simPlayer.baseHealth - actualDamage, 0)
        console.log(playerNewHealth, ' PLAYER NEW HEALTH')
        const damageLog = document.getElementById('damage-log')
        const damageP = document.createElement('logline')
        damageLog.style.fontSize = "12px"
        damageP.textContent = `${enemy.name} hits for: ${actualDamage} (you block ${blockedDamage})`
        damageLog.insertBefore(damageP, damageLog.firstChild);
        damageLog.appendChild(damageP)
        damageLog.scrollTop = damageLog.scrollHeight
        setSimPlayer(prevState => ({...prevState, baseHealth: playerNewHealth}))
    }

    const calculatePlayerDamage = (armorType, penetrationType) => {
        const enemyArmor = simEnemy[armorType]
        const damageObject = {}

        damageObject.armorType = `Enemy armor type is ${armorType}`
        damageObject.penetrationType = `Player penetration type is ${penetrationType}`
        damageObject.lowDamage = Math.ceil(simPlayer.attackPower * 0.5)
        damageObject.topDamage = Math.ceil(simPlayer.attackPower * 1.5)
        damageObject.rawDamage = randomNumberRange(damageObject.lowDamage, damageObject.topDamage)
        damageObject.enemyArmorAfterPenetration = Math.max(simEnemy[armorType] - simPlayer[penetrationType], 0)
        damageObject.actualDamage = Math.max(Math.floor((damageObject.rawDamage - damageObject.enemyArmorAfterPenetration) * (1000 / (1000 + damageObject.enemyArmorAfterPenetration))), 0)
        console.log(damageObject)
        return damageObject
    }
    const simulatePlayerHit = (armorType, penetrationType) => {
        const playerDamageObject = calculatePlayerDamage(armorType, penetrationType)
        const { actualDamage } = playerDamageObject
        const { rawDamage } = playerDamageObject
        const blockedDamage = rawDamage - actualDamage
        const enemyNewHealth = Math.max(simEnemy.baseHealth - actualDamage, 0)
        const damageLog = document.getElementById('damage-log')
        const damageP = document.createElement('logline')
        damageLog.style.fontSize = "12px"
        damageP.textContent = `You hit for: ${actualDamage} (enemy blocks ${blockedDamage})`
        damageLog.insertBefore(damageP, damageLog.firstChild);
        damageLog.appendChild(damageP)
        damageLog.scrollTop = damageLog.scrollHeight
        setSimEnemy(prevState => ({...prevState, baseHealth: enemyNewHealth}))
    }

    const handleLogReset = () => {
        const combatLog = document.getElementById('damage-log')
        combatLog.textContent = ''
    }

    const [isMoved, setIsMoved] = useState(false)
    function toggleSlide() {
        const slidingElement = document.querySelector("#test");
        // slidingElement.classList.toggle('slide-content')
        if (isMoved) {
            slidingElement.style.transform = 'translate(0, 0)'
        } else {
            slidingElement.style.transform = 'translate(100%, 0)'
        }
        setIsMoved(!isMoved)
        // const isMoved = slidingElement.style.transform === 'translate(100%, 0)';
        // slidingElement.style.transform = isMoved ? 'translate(0, 0)' : 'translate(100%, 0)';


    }

    return (
        <>
        {/* <App /> */}
        <button className="toggle-btn" onClick={toggleSlide}>→</button>
        <Container style={{height: "800px"}} className="slide slide-right">
            <div id="test" className="slide-content">Simulator</div>
            <Row>
            {/* <div className="container">
                    <div className="main-element">
                    </div>
                    
                    <div className="sliding-element">
                    This is the sliding element
                    </div>
                    </div> */}
                <Col>
                    <Row className="my-4">
                        <Col>
                            <Card>

                                <CardBody>
                                    <span className="d-flex justify-content-start">
                                    <CardText style={{marginRight: "10px"}}>Level: {actualLevel}</CardText>
                                    <Button onClick={incrementLevel} style={{maxHeight: "30px", maxWidth: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}>-</Button>
                                    <Button onClick={decrementLevel} style={{maxHeight: "30px", maxWidth: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}>+</Button>
                                    </span>
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
                    <Row style={{border: "2px solid green"}} className="d-flex justify-content-center align-content-around">
                        <Col className="d-flex flex-column justify-content-center">
                            <span className="d-flex justify-content-center">
                                <Button onClick={() => setSimEnemy(prev => ({...prev, baseHealth: enemy.baseHealth}))}>Reset Enemy</Button>
                            </span>
                            <Card className="my-2 d-flex align-items-center justify-content-between">
                                <CardTitle>Enemy</CardTitle>
                                <CardText>Health: {simEnemy.baseHealth}</CardText>
                            </Card>
                            <span className="d-flex justify-content-around">
                                <Button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('slashingArmor')}>Enemy Slashing Swing</Button>
                                <Button className="mx-1" style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('piercingArmor')}>Enemy Piercing Swing</Button>
                                <Button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('bluntArmor')}>Enemy Blunt Swing</Button>
                            </span>
                        </Col>
                        <Col>
                            {/*Card is what holds the combat log. Combat messages are appended here.*/}
                            <Card id="damage-log" className="my-2 d-flex align-items-start" style={{height: "220px", overflowY: "auto"}}></Card>
                                <span className="d-flex justify-content-center" style={{height: "30px"}}>
                                    <Button className="d-flex align-items-center" onClick={handleLogReset}>Reset</Button>
                                </span>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <span className="d-flex justify-content-center">
                                <Button onClick={() => setSimPlayer(prev => ({...prev, baseHealth: player.baseHealth}))}>Reset Player</Button>
                            </span>
                            <Card className="my-2 d-flex align-items-center justify-content-between">
                                <CardTitle>Player</CardTitle>
                                <CardText>Health: {simPlayer.baseHealth}</CardText>
                            </Card>
                            <span className="d-flex justify-content-around">
                                <Button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('slashingArmor', 'slashingPenetration')}>Player Slashing Swing</Button>
                                <Button className="mx-1" style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('piercingArmor', 'piercingPenetration')}>Player Piercing Swing</Button>
                                <Button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('bluntArmor', 'bluntPenetration')}>Player Blunt Swing</Button>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
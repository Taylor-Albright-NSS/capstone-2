import { useEffect, useState } from "react"
import { Card, CardBody, CardColumns, CardGroup, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { getEnemy } from "../../managers/enemyManager";
import { useParams } from "react-router-dom";
import './Simulator.css'
import { app } from "../../firebase/fireBase";
import App from "../../firebase/FirebaseUploadUI";
import { UserContext } from "../ApplicationViews";
import { useContext } from "react";

export const Simulator = () => {
    const { selectedCharacter } = useContext(UserContext)
    const simEnemyBase = {
        baseHealth: 1000,
        attackPower: 9,
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
            setSimEnemy(enemy)
        })
    }, [id])

    useEffect(() => {
        setPlayer(selectedCharacter)
        setSimPlayer(selectedCharacter)
    }, [])

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
     }

    //base variables
    const scalingFactor = 1
    const { attackPower } = enemy || 0
    const { baseExperience } = enemy || 0
    const { baseHealth } = enemy || 0
    const { actualLevel } = enemy || 0
    const { minLevel } = enemy || 0
    const { maxLevel } = enemy || 0
    const { slashingArmor } = enemy || 0
    const { piercingArmor } = enemy || 0
    const { bluntArmor } = enemy || 0
    // const { fireResist } = enemy || 0
    // const { iceResist } = enemy || 0
    // const { lightningResist } = enemy || 0
    
    const damageMultiplier = 1.0 + (actualLevel - minLevel) * 0.1
    //variables to interpolate
    const botDamage = Math.floor(attackPower * 0.5)
    const topDamage = Math.floor(attackPower * 1.5)


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
    const calculateEnemyDamage = (armorType) => {
        const playerArmor = simPlayer[armorType]
        const damageObject = {}
        damageObject.lowDamage = Math.ceil(simEnemy.attackPower * 0.5)
        damageObject.topDamage = Math.ceil(simEnemy.attackPower * 1.5)
        damageObject.rawDamage = Math.floor(randomNumberRange(damageObject.lowDamage, damageObject.topDamage) * damageMultiplier)
        damageObject.actualDamage = Math.max(Math.floor((damageObject.rawDamage - playerArmor) * (1000 / (1000 + playerArmor))), 0)
        return damageObject
    }
    
    const simulateEnemyHit = (armorType) => {
        const enemyDamageObject = calculateEnemyDamage(armorType)
        const { actualDamage } = enemyDamageObject
        const { rawDamage } = enemyDamageObject
        const blockedDamage = rawDamage - actualDamage
        const playerNewHealth = Math.max(simPlayer.health - actualDamage, 0)

        const damageLog = document.getElementById('damage-log')
        damageLog.style.fontSize = "12px"

        const enemyName = document.createElement("p")
        enemyName.classList.add("p-combat", "red", "mx-1")
        enemyName.textContent = `Enemy `

        const combatText1 = document.createElement("p")
        combatText1.classList.add("p-combat")
        combatText1.textContent = `hits for `

        const combatNumber = document.createElement("p")
        combatNumber.classList.add("p-combat", "yellow", "mx-1")
        combatNumber.textContent = `${actualDamage} `

        const combatText2 = document.createElement("p")
        combatText2.classList.add("p-combat")
        combatText2.textContent = `(you block ${blockedDamage})`

        const span = document.createElement("span")
        span.classList.add("d-flex")
        span.appendChild(enemyName)
        span.appendChild(combatText1)
        span.appendChild(combatNumber)
        span.appendChild(combatText2)

        damageLog.insertBefore(span, damageLog.firstChild);
        damageLog.appendChild(span)
        damageLog.scrollTop = damageLog.scrollHeight
        setSimPlayer(prevState => ({...prevState, health: playerNewHealth}))
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
        damageLog.style.fontSize = "12px"

        const enemyName = document.createElement("p")
        enemyName.classList.add("p-combat", "light-blue", "mx-1")
        enemyName.textContent = `You `

        const combatText1 = document.createElement("p")
        combatText1.classList.add("p-combat")
        combatText1.textContent = `hit for `

        const combatNumber = document.createElement("p")
        combatNumber.classList.add("p-combat", "yellow", "mx-1")
        combatNumber.textContent = `${actualDamage} `

        const combatText2 = document.createElement("p")
        combatText2.classList.add("p-combat")
        combatText2.textContent = `(enemy blocks ${blockedDamage})`

        const span = document.createElement("span")
        span.classList.add("d-flex")
        span.appendChild(enemyName)
        span.appendChild(combatText1)
        span.appendChild(combatNumber)
        span.appendChild(combatText2)

        damageLog.insertBefore(span, damageLog.firstChild);
        damageLog.appendChild(span)
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
        {!selectedCharacter?.id ? <p className="d-flex align-items-center">Select a character from your profile to use the simulator</p> :
        <Container>
        <h1 style={{textAlign: "center"}}>Combat Simulator</h1>
        <Container>
            <Row>
                <Col>
                    <Row className="my-4">
                        <Col style={{border: "6px ridge grey"}}>
                            <Card>
                                <h5 style={{textAlign: "center"}}>{enemy.name}</h5>
                                <CardBody>
                                    <span style={{height: "24px"}} className="d-flex justify-content-start">
                                        <p className="d-flex align-items-center" style={{marginRight: "10px", marginBottom: 0}}>Level: {actualLevel}</p>
                                        <span className="d-flex">
                                            <button onClick={decrementLevel} style={{maxHeight: "30px", maxWidth: "30px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.5rem"}}>-</button>
                                            <button onClick={incrementLevel} style={{maxHeight: "30px", maxWidth: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}>+</button>
                                        </span>
                                    </span>
                                    <CardText style={{margin: 0}}>Damage Range: {Math.floor(botDamage * damageMultiplier)} - {Math.floor(topDamage * damageMultiplier)}</CardText>
                                    {/* <CardText>Gold Range: {enemy?.minGold} - {enemy?.maxGold}</CardText> */}
                                    <CardText style={{margin: 0}}>Experience: {experience}</CardText>
                                    <CardText style={{margin: 0}}>Health: {health}</CardText>
                                    <div className="">
                                        <span className="d-flex flex-column align-items-start">
                                            <CardText style={{margin: 0}}>Slashing Armor: {slashingArmor}</CardText>
                                            <CardText style={{margin: 0}}>Piercing Armor: {piercingArmor}</CardText>
                                            <CardText style={{margin: 0}}>Blunt Armor: {bluntArmor}</CardText>
                                        </span>
                                    </div>
                                    <span id="enemy-damage-types" className="d-flex flex-column align-items-center">
                                    <h6 style={{textAlign: "center", marginTop: "1rem"}}>Damage Type(s)</h6>
                                        {enemy?.slashingDamage && <CardText style={{margin: 0}}>Slashing</CardText>}
                                        {enemy?.piercingDamage && <CardText style={{margin: 0}}>Piercing</CardText>}
                                        {enemy?.bluntDamage && <CardText style={{margin: 0}}>Blunt</CardText>}
                                    </span>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col style={{border: "6px ridge grey"}}>
                            <Card style={{height: "100%"}}>
                                <h5 style={{alignSelf: "center", margin: 0, textAlign: "center", color: "gold"}}>{player?.name}</h5>
                                <CardBody>
                                    <CardText style={{margin: 0}}>Health: {player?.health}</CardText>
                                    <CardText style={{margin: 0}}>Attack Power: {player?.attackPower}</CardText>
                                    <CardText style={{margin: 0}}>Slashing Penetration: {player?.slashingPenetration}</CardText>
                                    <CardText style={{margin: 0}}>Piercing Penetration: {player?.piercingPenetration}</CardText>
                                    <CardText style={{margin: 0}}>Blunt Penetration: {player?.bluntPenetration}</CardText>
                                    <CardText style={{margin: 0}}>Slashing Armor: {player?.slashingArmor}</CardText>
                                    <CardText style={{margin: 0}}>Piercing Armor: {player?.piercingArmor}</CardText>
                                    <CardText style={{margin: 0}}>Blunt Armor: {player?.bluntArmor}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{border: "6px ridge grey"}} className="d-flex justify-content-center align-content-around">
                        <Col className="d-flex flex-column justify-content-center">
                            <Card className="my-2 d-flex align-items-center justify-content-between">
                                <h5>{enemy.name}</h5>
                                <CardText>Health: {simEnemy.baseHealth}</CardText>
                            </Card>
                            <span className="d-flex justify-content-around">
                                {enemy.slashingDamage && <button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('slashingArmor')}>Enemy Slashing Swing</button>}
                                {enemy.piercingDamage && <button className="mx-1" style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('piercingArmor')}>Enemy Piercing Swing</button>}
                                {enemy.bluntDamage && <button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulateEnemyHit('bluntArmor')}>Enemy Blunt Swing</button>}
                            </span>
                            <span className="d-flex justify-content-center">
                                <button onClick={() => setSimEnemy(prev => ({...prev, baseHealth: health}))}>Reset Enemy</button>
                            </span>
                        </Col>
                        <Col className="col-5">
                            {/*Card is what holds the combat log. Combat messages are appended here.*/}
                            <Card id="damage-log" className="my-2 d-flex align-items-start" style={{height: "220px", overflowY: "auto"}}></Card>
                                <span className="d-flex justify-content-center" style={{height: "30px"}}>
                                    <button className="d-flex align-items-center" onClick={handleLogReset}>Reset</button>
                                </span>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <Card className="my-2 d-flex align-items-center justify-content-between">
                                <h5>{player.name}</h5>
                                <CardText>Health: {simPlayer?.health}</CardText>
                            </Card>
                            <span className="d-flex justify-content-around">
                                <button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('slashingArmor', 'slashingPenetration')}>Player Slashing Swing</button>
                                <button className="mx-1" style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('piercingArmor', 'piercingPenetration')}>Player Piercing Swing</button>
                                <button style={{padding: 0, fontSize: "10px", maxWidth: "78px"}} onClick={() => simulatePlayerHit('bluntArmor', 'bluntPenetration')}>Player Blunt Swing</button>
                            </span>
                            <span className="d-flex justify-content-center">
                                <button onClick={() => setSimPlayer(prev => ({...prev, health: player.health}))}>Reset Player</button>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Container>
}
        </>
    )
}
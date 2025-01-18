import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardColumns, CardGroup, CardText, CardTitle, Container } from "reactstrap";
import { getEnemy } from "../../managers/enemyManager";
import { useParams } from "react-router-dom";


export const Simulator = () => {
    const [simEnemy, setSimEnemy] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getEnemy(id).then(enemy => {
            enemy.actualLevel = enemy.minLevel
            setSimEnemy(enemy)
        })
    }, [id])

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
     }
     function calculateStat(baseStat, level, scalingFactor) {
        const scaledValue = baseStat + (level * scalingFactor); // Random between -variance and +variance
        return Math.round(scaledValue);
    }

    //base variables
    const scalingFactor = 1 //Strength is increased by 1 per level
    const { baseDamage } = simEnemy || 0
    const { baseExperience } = simEnemy || 0
    const { baseHealth } = simEnemy || 0
    const { actualLevel } = simEnemy || 0
    const { minLevel } = simEnemy || 0
    const { maxLevel } = simEnemy || 0
    const dodgeRating = simEnemy?.dodgeRating + actualLevel || 0
    const accuracyRating = simEnemy?.accuracyRating + actualLevel || 0
    
    //variables to interpolate
    const botDamage = Math.floor(baseDamage * 0.5)
    const topDamage = Math.floor(baseDamage * 1.5)
    const experience = actualLevel == minLevel ? baseExperience : Math.floor((((actualLevel * 0.1) * baseExperience) + baseExperience))
    const health = actualLevel == minLevel ? baseHealth : Math.floor((((actualLevel * 0.1) * baseHealth) + baseHealth))
    
    //randomizer
    const damage = randomNumberRange(botDamage, topDamage)
    const incrementLevel = () => {
        if (simEnemy.actualLevel + 1 > simEnemy.maxLevel) {return}
        setSimEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel + 1}))
    }
    const decrementLevel = () => {
        if (simEnemy.actualLevel - 1 < simEnemy.minLevel) {return}
        setSimEnemy(prevEnemy => ({...prevEnemy, actualLevel: prevEnemy.actualLevel - 1}))
    }


    return (
        <Container>
            <Button onClick={decrementLevel}>Decrease Enemy Level</Button>
            <Button onClick={incrementLevel}>Increase Enemy Level</Button>
            <Card>
                <CardTitle style={{alignSelf: "center"}}>Simulator</CardTitle>
                <CardBody>
                    <CardText>Level: {actualLevel}</CardText>
                    <CardText>Damage Range: {botDamage} - {topDamage}</CardText>
                    {/* <CardText>Gold Range: {simEnemy?.minGold} - {simEnemy?.maxGold}</CardText> */}
                    <CardText>Experience: {experience}</CardText>
                    <CardText>----</CardText>
                    <CardText>Health: {health}</CardText>
                    <CardText>Dodge: {dodgeRating}</CardText>
                    <CardText>Accuracy: {accuracyRating}</CardText>
                    
                </CardBody>
            </Card>
        </Container>
    )
}
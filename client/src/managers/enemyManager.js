const api_url = "/api/enemy"

export const getEnemies = async () => {
    const response = await fetch(`${api_url}`)
    if (!response.ok) {
        throw new Error(`Error fetching enemy. Status: ${response.status}`)
    } else {
        console.log(`All enemies found`)
    }
    const data = await response.json()
    return data
}

export const getEnemy = async (id) => {
    const response = await fetch(`${api_url}/${id}`)
    return await response.json()
}
export const getEnemyForEdit = async (id) => {
    const response = await fetch(`${api_url}/enemyforedit/${id}`)
    return await response.json()
}

export const postEnemy = async (enemy) => {
    console.log(enemy, 'Posted enemy')
    const response = await fetch(`${api_url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(enemy)
    })
    const data = await response.json()
    console.log(data, "data")

    if (!response.ok) {
        throw new Error(`Error posting enemy. Status: ${response.status}`)
    } else {
        console.log("enemy created")
    }

    return data
}

export const deleteEnemy = async (enemyId, userId) => {
    console.log(enemyId, userId)
    const response = await fetch(`${api_url}/${enemyId}?userId=${userId}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        const data = await response.json()
        console.log(data)

    }
}

export const putEnemy = async (enemy, userId) => {
    console.log(enemy.id, userId)
    try {
        const response = await fetch(`${api_url}/${enemy.id}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enemy)
        })
        const data = await response.json()
        const { message } = data
        console.log(message, ' mess')
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
        return data
        } catch (error) {
            console.error("API error:", error)
            throw error
        }
}

export const getUserEnemies = async (userId) => {
    try {
        const response = await fetch(`${api_url}/${userId}/userEnemies`)
        const data = await response.json()
        console.log(data.message)
        if (!response.ok) {
            throw new Error(`Unable to get user enemies`)
        }
        return data
    } catch (error) {
        console.error(`${error}`)
        throw error
    }
}

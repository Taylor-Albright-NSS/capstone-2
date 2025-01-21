const api_url = "/api/enemy"

export const getEnemies = async () => {
    const response = await fetch(`${api_url}`)
    if (!response.ok) {
        throw new Error(`Error fetching enemy. Status: ${response.status}`)
    } else {
        console.log(`Enemy found`)
    }

    

    return await response.json()
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

    if (!response.ok) {
        throw new Error(`Error posting enemy. Status: ${response.status}`)
    } else {
        console.log("enemy created")
    }

    return response.json()
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

export const putEnemy = async (enemy, enemyId, userId) => {
    try {
        const response = await fetch(`${api_url}/${enemyId}?userId=${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enemy)
        })
        const data = await response.json()
        const { message } = data
        console.log(message)

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
 

        } catch (error) {
            console.error("API error:", error)
            throw error
        }
}

export const getUserEnemies = async (userId) => {
    console.log('Trying to get user enemies')
    console.log(userId, ' user id')
    try {
        const response = await fetch(`${api_url}/${userId}/userEnemies`)
        const data = await response.json()
        if (!response.ok) {
            console.log(data.message)
            console.log("sdfafasdfdsafdasfsda")
            throw new Error(`Unable to get user enemies`)
        }
        return data
    } catch (error) {
        console.error(`${error}`)
        throw error
    }
}

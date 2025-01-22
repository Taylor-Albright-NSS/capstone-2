const api_url = "/api/enemy"

export const getEnemies = async () => {
    const response = await fetch(`${api_url}`)
    if (!response.ok) {
        throw new Error(`Error fetching enemy. Status: ${response.status}`)
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
    const response = await fetch(`${api_url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(enemy)
    })

    if (!response.ok) {
        throw new Error(`Error posting enemy. Status: ${response.status}`)
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

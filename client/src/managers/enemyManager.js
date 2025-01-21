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

export const deleteEnemy = async (enemyId) => {
    const response = await fetch(`${api_url}/${enemyId}`, {
        method: "DELETE"
    })
}

export const putEnemy = async (enemy, enemyId) => {
    try {
        const response = await fetch(`${api_url}/${enemyId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enemy)
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
 
        const data = await response.json()
        const { message } = data
        return message

        } catch (error) {
            console.error("API error:", error)
            throw error
        }
}

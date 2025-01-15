const api_url = "/api/enemy"

export const getEnemies = async () => {
    const response = await fetch(`${api_url}`)
    return await response.json()
}

export const getEnemy = async (id) => {
    const response = await fetch(`${api_url}/${id}`)
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

export const deleteEnemy = async (enemyId) => {
    console.log(enemyId)
    const response = await fetch(`${api_url}/${enemyId}`, {
        method: "DELETE"
    })
}
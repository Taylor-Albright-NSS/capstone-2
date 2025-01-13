const api_url = "/api/enemy"

export const getEnemies = async () => {
    const response = await fetch(`${api_url}`)
    return await response.json()
}
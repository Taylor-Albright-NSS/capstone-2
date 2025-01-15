const api_url = "/api/image"

export const getEnemyImages = async () => {
    const response = await fetch(`${api_url}`)
    return await response.json()
}
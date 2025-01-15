const api_url = "/api/image"

export const getEnemyImages = async () => {
    try {
        const response = await fetch(`${api_url}`)
        if (!response.ok) {
            throw new Error(`Custom message: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch(error) {
        console.error(error)
    }
}
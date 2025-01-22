const api_url = "/api/character"

export const getCharacters = async () => {
    try {
        const response = await fetch(`${api_url}`)
        const data = await response.json()
        if (!response.ok) {
            throw new Error(`Couldn't retrieve characters`)
        }
        return data
    } catch (error) {
        console.error(`Error message: ${error}`)
    }
}
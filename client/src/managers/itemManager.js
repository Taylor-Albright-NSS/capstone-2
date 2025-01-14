const api_url = "api/item"

export const getItems = async () => {
    const response = await fetch(`${api_url}`)
    return await response.json()
}
const api_url = "/api/character"

export const getCharacters = async (userId) => {
    try {
        const response = await fetch(`${api_url}/${userId}`)
        const data = await response.json()
        if (!response.ok) {
            throw new Error(`Couldn't retrieve characters`)
        }
        console.log(data)
        return data
    } catch (error) {
        console.error(`Error message: ${error}`)
    }
}

export const postCharacter = async (character) => {
    const response = await fetch(`${api_url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    })
    if (!response.ok) {
        console.log(`THERE WAS AN ERROR`)
    }
    const data = await response.json()
    console.log(data, ' CHARACTER DATA')
    return data
}

export const deleteCharacter = async (id) => {
    try {
        const response = await fetch(`${api_url}/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(data, ' DATA')
        if (!response.ok) {
            throw new Error(`Could not delete`)
        }
        return data
    }
    catch (error) {
        console.log(error)
    }
}
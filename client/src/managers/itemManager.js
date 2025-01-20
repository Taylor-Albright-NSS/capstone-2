const api_url = "/api/item"

export const getItems = async () => {
    try {
        const response = await fetch(`${api_url}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching items:", error);
        return null;
    }
};
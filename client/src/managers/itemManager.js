const api_url = "/api/item"

export const getItems = async () => {
    console.log("get items runs");
    
    try {
        const response = await fetch(`${api_url}`);

        // Check if the response status is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Attempt to parse the JSON
        const data = await response.json();
        return data;

    } catch (error) {
        // Log any errors and return an appropriate fallback
        console.error("Error fetching items:", error);
        return null; // Or throw the error again, depending on how you want to handle it
    }
};
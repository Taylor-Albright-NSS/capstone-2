import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase/fireBase";
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

//FIREBASE FETCH
export const getEnemyImagesFirebase = async () => {
    const imagesRef = ref(storage, 'uploads/');
    try {
      const res = await listAll(imagesRef);
      const imageUrls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      return imageUrls;  // Return the URLs of all images
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
import React, { useState } from "react";
import { storage } from "./fireBase"; // Import Firebase storage
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { Button } from "reactstrap";
import { fetchImages } from "../managers/imageManager";

const App = () => {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState("");
  const [images, setImages] = useState([])

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    // const uploadsRef = ref(storage, `uploads/${file.name}`)
    // await uploadBytes(uploadsRef, file).then(() => console.log("Success!"))
    // const url = await getDownloadURL(uploadsRef)
    try {
      console.log(storage, ' STORAGE')
      const uploadsRef = ref(storage, `uploads/${file.name}`)
      await uploadBytes(uploadsRef, file);
      const url = await getDownloadURL(uploadsRef);
      setDownloadURL(url);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };
  const handleImagesSet = () => {
    fetchImages().then(images => {
      console.log(images)
    })
  }

  // const fetchImages = async () => {
  //     const imagesRef = ref(storage, 'uploads/');
  //     try {
  //       const res = await listAll(imagesRef);
  //       const imageUrls = await Promise.all(
  //         res.items.map(async (itemRef) => {
  //           const url = await getDownloadURL(itemRef);
  //           return url;
  //         })
  //       );
  //       return imageUrls;  // Return the URLs of all images
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   }

  return (
    <div>
      <Button onClick={handleImagesSet}>Set Images!</Button>
      <h1>Upload Image</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
      {downloadURL && (
        <p>
          Uploaded! <a href={downloadURL}>View Image</a>
        </p>
      )}
    </div>
  );
};

export default App;

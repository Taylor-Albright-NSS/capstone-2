import React, { useState } from "react";
import { storage } from "./fireBase"; // Import Firebase storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const App = () => {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    const uploadsRef = ref(storage, 'uploads')
    uploadBytes(uploadsRef, file).then((snapshot) => {
      console.log("UPLOAD SUCCESS!")
    })
    // try {
    //   console.log(storage)
    //   console.log(file)
    //   const storageRef = ref(storage, `files/${file.name}`);
    //   await uploadBytes(storageRef, file);
    //   const url = await getDownloadURL(storageRef);
    //   setDownloadURL(url);
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    //   alert("Failed to upload file.");
    // }
  };

  return (
    <div>
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

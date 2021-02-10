import React, { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timeStamp } from "../firebase/config";

const UseStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let parcentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(parcentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        
        collectionRef.add({url, createAt:Date.now()})
        setUrl(url);
      }
    );
  }, [file]);

  return [progress, url, error];
};

export default UseStorage;

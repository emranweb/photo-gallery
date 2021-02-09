import React, {useEffect, useState} from 'react'
import {projectStorage} from "../firebase/config";

const UseStorage = (file)=>{
  const [progress, setProgress]= useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(null);
    

  useEffect(()=>{
   
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on("state_changed", (snap)=>{
       
      let parcentage = (snap.bytesTransferred / snap.totalBytes) * 100;
       
       setProgress(parcentage);

    },(error)=>{
      setError(error)
    }, async ()=>{
      const url =  storageRef.getDownloadURL();
      setUrl(url);
    })

  },[file])

  return (
      [progress, url, error]
  )

}


export default UseStorage;
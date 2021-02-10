import React, {useEffect, useState} from 'react'
import {projectStorage} from "../firebase/config";

const UseStorage = (file)=>{
  const [progress, setProgress]= useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(null);
    

  useEffect(()=>{
   
    const storageRef = projectStorage.ref(file.name);

      storageRef.put(file).on("state_changed", (span)=>{

      })

  },[file])

  return (
      <h1>User Storae Function</h1>
  )

}


export default UseStorage;
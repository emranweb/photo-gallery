import React from 'react'
import UseStorage from '../hooks/UserStorage';

const ProgressBar = (props)=>{
   const {file, setFile} = props;

   let [progress, url] = UseStorage(file);
  
   return (

      <div className="progess-bar" style={{width: progress + "%", backgroundColor:'red', height:"5px"}}></div>
   )
}

export default ProgressBar;
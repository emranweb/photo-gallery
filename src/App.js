import React,{useState} from 'react';
import Title from './comps/Title';
import UploadFrom from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
   const [image, setImage] = useState(null);
  return (
    <div className="App container mx-auto">
      <Title/>
      <UploadFrom />
      <ImageGrid  image={setImage}/>
      <Modal  imageUrl = {image} closeModal={setImage}/>
    </div>
  );
}

export default App;

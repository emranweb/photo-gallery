import React from 'react';
import Title from './comps/Title';
import UploadFrom from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";

function App() {
  return (
    <div className="App container mx-auto">
      <Title/>
      <UploadFrom />
      <ImageGrid />
    </div>
  );
}

export default App;

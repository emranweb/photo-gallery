import React, { useState } from "react";
import ProgressBar from "./ProgressBar";


function UploadFrom() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const types = ["image/png", "image/jpeg"];

  // upload the image

  const imageUpload = (e) => {
    const inputFile = e.target.files[0];

    if (inputFile && types.includes(inputFile.type)) {
      setFile(inputFile);
      setError("");
    } else {
      setError("Plese Insert Image");
      setFile(null);
    }
  };

  return (
    <div>
      <div className="card border border-solid bg-gray-500 p-5">
        <h3 className="text-xl mb-3"> Upload Your Image </h3>
        <input type="file" onChange={imageUpload} />
      </div>
      <div className="output">
           {error && <div className="error">{error}</div>}
           {file && <div className="error">{file.name}</div>}
           {file && <ProgressBar  file={file} setFile={setFile} />}
        </div>
    </div>
  );
}

export default UploadFrom;

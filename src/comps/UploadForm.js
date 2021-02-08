import React, { useState } from "react";

function UploadFrom() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const types = ["image/png", "image/jpeg"];

  // upload the image

  const imageUpload = (e) => {
    const inputFile = e.target.files[0];

    if (inputFile && types.includes(inputFile.type)) {
      setFile(inputFile);
<<<<<<< HEAD
      setError(null);
=======
      setError("");
>>>>>>> 620e9ee4067d572e77f5347b8b81001ca2a0846a
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
        </div>
    </div>
  );
}

export default UploadFrom;

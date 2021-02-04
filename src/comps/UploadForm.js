import React, { useState } from "react";

function UploadFrom() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const imageUpload = (e) => {
    const inputFile = e.target.files[0];

    if (inputFile && types.includes(inputFile.type)) {
      setFile(inputFile);
    } else {
      setError("Plese Insert Image");
      setFile(null);
    }
  };

  console.log(error);
  return (
    <div>
      <div className="card border border-solid bg-gray-500 p-5">
        <h3 className="text-xl mb-3"> Upload Your Image </h3>
        <input type="file" onChange={imageUpload} />
      </div>
    </div>
  );
}

export default UploadFrom;

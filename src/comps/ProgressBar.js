import React, { useEffect } from "react";
import UseStorage from "../hooks/UserStorage";

const ProgressBar = (props) => {
  const { file, setFile } = props;

  let [progress, url] = UseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className="progess-bar"
      style={{ width: progress + "%", backgroundColor: "red", height: "5px" }}
    ></div>
  );
};

export default ProgressBar;

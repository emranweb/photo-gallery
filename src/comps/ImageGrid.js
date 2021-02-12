import React from "react";
import UseFirestore from "../hooks/UseFirestore";

const ImageGrid = (props) => {
  const { doc } = UseFirestore("images");

  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {doc &&
        doc.map((item) => {
          return (
            <div className="item cursor-pointer" key={item.id} onClick={()=>props.image(item.url)}>
              <img src={item.url} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;

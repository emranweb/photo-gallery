import React from "react";
import UseFirestore from "../hooks/UseFirestore";
import {motion} from "framer-motion";

const ImageGrid = (props) => {
  const { doc } = UseFirestore("images");

  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {doc &&
        doc.map((item) => {
          return (
            <motion.div className="item cursor-pointer opacity-50" key={item.id} onClick={()=>props.image(item.url)} layout whileHover={{opacity:1}}>
              <motion.img src={item.url} alt="img" initial={{opacity:0}} animate={{opacity:1}} transition ={{delay:1}}/>
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;

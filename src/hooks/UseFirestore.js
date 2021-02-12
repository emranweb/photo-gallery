import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const UseFirestore = (collection) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const UnSub = projectFirestore
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDoc(document);
      });
    //cleanup
    return () => UnSub();
  }, [collection]);
  return { doc };
};

export default UseFirestore;

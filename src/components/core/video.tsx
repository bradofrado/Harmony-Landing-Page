'use client';
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export function Video() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  
    return (
      hasWindow ? <div style={{position: "relative",paddingBottom: "53.73134328358209%",height: 0}}>
        <iframe src="https://www.loom.com/embed/c569217786984bebb99c72aa69dfb2fd?sid=62de6885-0bd8-4532-9cd1-17bf634e0649" frameBorder="0" allowFullScreen style={{position: "absolute",top: 0,left: 0,width: "100%",height: "100%"}}></iframe>
        </div> : null
    )
  }
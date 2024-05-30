'use client';
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export const Video: React.FunctionComponent<{src: string, type?: 'loom' | 'player'}> = ({src, type='loom'}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  
    return (
      hasWindow ? type === 'loom' ? <div style={{position: "relative",paddingBottom: "53.73134328358209%",height: 0}}>
        <iframe src={src} frameBorder="0" allowFullScreen style={{position: "absolute",top: 0,left: 0,width: "100%",height: "100%"}}></iframe>
        </div> : <ReactPlayer url={src} controls height="100%" width="100%"/> : null
    )
  }
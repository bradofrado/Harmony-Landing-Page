"use client";
import { useEffect, useRef, useState } from "react"

interface RotatingTextProps {
    texts: string[],
    className?: string;
}
export const RotatingText: React.FunctionComponent<RotatingTextProps> = ({texts, className}) => {
    const [textIndex, setTextIndex] = useState(0);
    const [transparency, setTransparency] = useState(1);
    const transparencyLoopRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const makeNewIndex = (textIndex: number) => {
            const newIndex = textIndex === texts.length - 1 ? 0 : textIndex + 1;
            setTextIndex(newIndex);
            const decresaseTransparency = (transparency: number) => {
                if (transparency <= 0) {
                    makeNewIndex(newIndex);
                    return;
                }
                const newTrans = transparency - 0.05
                setTransparency(Math.max(0, newTrans));
                transparencyLoopRef.current = setTimeout(() => decresaseTransparency(newTrans), 20)
            }
            const increaseTransparency = (transparency: number) => {
                if (transparency >= 1) {
                    transparencyLoopRef.current = setTimeout(() => decresaseTransparency(1), 5000);
                    return;
                }
                const newTrans = transparency + 0.05
                setTransparency(Math.min(1, newTrans));
                transparencyLoopRef.current = setTimeout(() => increaseTransparency(newTrans), 20)
            }

            clearTimeout(transparencyLoopRef.current);
            setTransparency(0);
            transparencyLoopRef.current = setTimeout(() => increaseTransparency(0), 200);
        }
        makeNewIndex(0);
    }, []);

    const text = texts[textIndex];
    return (
        <span className={className} style={{opacity: `${transparency * 100}%`}}>{text}</span>
    )
}

const useBackgroundLoop = (callback: () => void, intervalInSeconds: number) => {
	const callbackRef = useRef(callback);
	const intervalRef = useRef<NodeJS.Timeout>();
	
	// Update the callback function if it changes
	useEffect(() => {
	    callbackRef.current = callback;
	}, [callback]);
  
	// Start the background loop when the component mounts
	useEffect(() => {
        const handle = () => {
        callbackRef.current();
        };

        // Call the callback immediately when the component mounts
        handle();

        // Start the interval
        intervalRef.current = setInterval(handle, intervalInSeconds * 1000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalRef.current);
        };
	}, [intervalInSeconds]);
  
	// Function to manually stop the background loop
	const stopBackgroundLoop = () => {
	    clearInterval(intervalRef.current);
	};
  
	return stopBackgroundLoop;
};
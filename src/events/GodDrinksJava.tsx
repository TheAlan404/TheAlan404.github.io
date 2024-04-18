import code from "../assets/package_goddrinksjava";
import { useEffect, useMemo, useRef, useState } from "react";

export const GodDrinksJava = () => {
    let [yOffset, setYOffset] = useState(0);

    let audioRef = useRef(useMemo(() => new Audio("/audio/worldexecuteme.webm"), []));

    useEffect(() => {
        audioRef.current.play();
        audioRef.current.volume = 0.5;

        let handle;
        let update = () => {
            setYOffset(audioRef.current.currentTime * 5);
            handle = requestAnimationFrame(update);
        }
        handle = requestAnimationFrame(update);

        return () => {
            audioRef.current.pause();
            cancelAnimationFrame(handle);
        }
    }, []);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                    width: "100vw",
                    height: "100vh",
                    overflow: "visible",
                    animation: "100s linear execution",
                    left: "0%",
                    padding: "1em",
                    color: "var(--mantine-color-dimmed)",
                    fontFamily: "monospace",
                    top: `${-yOffset}%`,
                    transition: "transform 100ms linear",
                }}
            >
                {code}
            </div>
        </>
    )
}

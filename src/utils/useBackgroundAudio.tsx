import { useEffect } from "react";
import { useRef } from "react";

export const useBackgroundAudio = (
    src?: string,
) => {
    let ref = useRef(new Audio(src));

    useEffect(() => {
        ref.current = new Audio(src);
        ref.current.loop = true;
        ref.current.play()
            .catch(() => document.addEventListener("click", () => {
                ref.current.play();
            }, { once: true }));

        return () => {
            ref.current.pause();
        }
    }, [src || ""]);
};

import { useEffect } from "react";

export const useAppScroll = (cb: (scrollTop: number) => void) => {
    useEffect(() => {
        const onScroll = () => cb(window.scrollY);

        window.addEventListener("scroll", onScroll);
        
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
};

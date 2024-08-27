import { useEffect } from "react";

export const useAppScroll = (cb: (scrollTop: number) => void) => {
    useEffect(() => {
        let el = document.querySelector(".mantine-ScrollArea-viewport") as HTMLElement | null;
        if(!el) return;

        const onScroll = () => cb(el.scrollTop);

        el.addEventListener("scroll", onScroll);
        
        return () => {
            el.removeEventListener("scroll", onScroll);
        };
    }, []);
};

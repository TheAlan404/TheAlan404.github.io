import { useEffect } from "react";

export const useScrollDelta = (onScroll: (delta: number, e: HTMLElement) => void) => {
    useEffect(() => {
        let cache: Record<string, number> = {};
        const onWindowScroll = (e: Event) => {
            let el = e.target as HTMLElement;
            if(!el.id) el.id = Math.random().toString(36);
            let id = el.id;
            
            let oldScroll = cache[id] || 0;
            let newScroll = el.scrollTop;
            cache[id] = newScroll;

            let delta = oldScroll - newScroll;

            onScroll(delta, el);
        };

        let scrollAreas = document.querySelectorAll(".mantine-ScrollArea-viewport");
        scrollAreas.forEach((e) => e.addEventListener("scroll", onWindowScroll));

        return () => {
            scrollAreas.forEach((e) => e.removeEventListener("scroll", onWindowScroll));
        };
    }, []);
};

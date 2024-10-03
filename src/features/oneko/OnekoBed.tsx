import { OnekoContext } from "./OnekoAPI";
import { useContext, useEffect, useRef } from "react";
import { useWindowEvent } from "@mantine/hooks";
import { Coord } from "@/src/types";

export const OnekoBed = ({
    id,
    offset,
}: {
    id: string;
    offset?: Coord;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setBed, removeBed } = useContext(OnekoContext);

    const set = () => {
        if (!ref.current || !ref.current.parentElement) return;

        let rect = ref.current.parentElement.getBoundingClientRect();
        // still no clue why we need to do this
        if(!rect.x || !rect.y) return;

        setBed(id, {
            x: rect.x + 16 + (offset?.x || 0),
            y: rect.y + 16 + (offset?.y || 0),
        });
    }

    useWindowEvent("resize", () => {
        set();
    });

    useEffect(() => {
        set();

        return () => removeBed(id);
    }, []);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                userSelect: "none",
            }}
        />
    )
}

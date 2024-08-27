import { Box, Image } from "@mantine/core";
import { useContext } from "react";
import { useEffect } from "react";
import { Weather, WeatherContext } from "../effects/Weather";
import { OnekoContext } from "./OnekoAPI";
import { useRef } from "react";
import { useWindowEvent } from "@mantine/hooks";

export const OnekoInitialPosition = () => {
    const [weather] = useContext(WeatherContext);
    const ref = useRef<HTMLDivElement>(null);
    const { setInitial } = useContext(OnekoContext);

    const set = () => {
        if (!ref.current || !ref.current.parentElement) return;

        let rect = ref.current.parentElement.getBoundingClientRect();
        // still no clue why we need to do this
        if(!rect.x || !rect.y) return;

        setInitial({
            x: rect.x + 16,
            y: rect.y + 16,
        });
    }

    useWindowEvent("resize", () => {
        set();
    });

    useEffect(() => {
        set();
    }, [ref]);

    return (
        <span
            ref={ref}
            style={{
                position: "relative",
                userSelect: "none",
            }}
        >
            {/*(weather == Weather.Rain || weather == Weather.Snow) && (
                <Image
                    src="/assets/img/cats/umbrella2.webp"
                    draggable={false}
                    style={{
                        left: "1em",
                        width: "60px",
                        top: "-1.5em",
                        imageRendering: "pixelated",
                        position: "absolute",
                        userSelect: "none",
                    }}
                />
            )*/}
        </span>
    )
}

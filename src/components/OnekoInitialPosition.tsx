import { Box, Image } from "@mantine/core";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { Weather, WeatherContext } from "../features/Weather";
import { OnekoContext } from "../features/OnekoAPI";
import { useRef } from "react";

export const OnekoInitialPosition = () => {
    const [weather] = useContext(WeatherContext);
    const ref = useRef<HTMLDivElement>(null);
    const { setInitial } = useContext(OnekoContext);

    useEffect(() => {
        if (!ref.current) return;

        let rect = ref.current.parentElement!.getBoundingClientRect()!;

        // WTF
        if(!rect.x || !rect.y) return;

        setInitial({
            x: rect.x + (rect.width / 2),
            y: rect.y - 10,
        });
    }, [ref]);

    return (
        <span
            ref={ref}
            style={{
                position: "relative",
                userSelect: "none",
            }}
        >
            {(weather == Weather.Rain || weather == Weather.Snow) && (
                <Image
                    src="/img/cats/umbrella2.webp"
                    draggable={false}
                    style={{
                        left: "1em",
                        width: "60px",
                        top: "-2.3em",
                        imageRendering: "pixelated",
                        position: "absolute",
                        userSelect: "none",
                    }}
                />
            )}
        </span>
    )
}

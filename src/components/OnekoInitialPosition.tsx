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
        if(!ref.current) return;
        
        let rect = ref.current.getBoundingClientRect();

        // wtf
        if(!rect.x || !rect.y) return;

        setInitial({
            x: rect.x,
            y: rect.y,
        });
    }, [ref]);

    return (
        <Box style={{
            position: "relative",
            userSelect: "none",
        }}>
            <div
                ref={ref}
                style={{
                    right: "calc(5% + 12px)",
                    top: "5px",
                    width: "1px",
                    height: "1px",
                    position: "absolute"
                }}
            />
            {(weather == Weather.Rain || weather == Weather.Snow) && (
                <Image
                    src="/img/cats/umbrella2.webp"
                    draggable={false}
                    style={{
                        right: "calc(5% - 37px)",
                        width: "60px",
                        top: "-25px",
                        imageRendering: "pixelated",
                        position: "absolute",
                        userSelect: "none",
                    }}
                />
            )}
        </Box>
    )
}

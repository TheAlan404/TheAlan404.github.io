import { Box, Image } from "@mantine/core";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { Weather, WeatherContext } from "../features/Weather";

export const SleepingOneko = () => {
    const [weather] = useContext(WeatherContext);
    const [odd, setOdd] = useState(true);

    useEffect(() => {
        let i = setInterval(() => setOdd(x => !x), 1000);
        return () => clearInterval(i);
    }, []);

    return (
        <Box style={{
            position: "relative",
            userSelect: "none",
        }}>
            <div
                style={{
                    right: "5%",
                    top: "-12px",
                    backgroundImage: "url(/img/cats/oneko-classic.gif)",
                    width: "32px",
                    height: "32px",
                    imageRendering: "pixelated",
                    backgroundPosition: `${-2 * 32}px ${(odd ? 0 : -1) * 32}px`,
                    position: "absolute"
                }}
            />
            {(weather == Weather.Rain || weather == Weather.Snow) && (
                <Image
                    src="/img/cats/umbrella.webp"
                    draggable={false}
                    style={{
                        right: "calc(5% - 16px)",
                        width: "32px",
                        top: "-20px",
                        imageRendering: "pixelated",
                        position: "absolute",
                        userSelect: "none",
                    }}
                />
            )}
        </Box>
    )
}

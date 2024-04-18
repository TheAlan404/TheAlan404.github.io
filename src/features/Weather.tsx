import { Affix, Box, Group, SegmentedControl } from "@mantine/core";
import { useState } from "react"
import { useCanvas } from "../utils/useCanvas";
import { useRef } from "react";
import { useEffect } from "react";
import { useBackgroundAudio } from "../utils/useBackgroundAudio";
import { rand } from "../utils/utils";

enum Weather {
    Sunny = "sunny",
    Rain = "rain",
    Snow = "snow",
    CherryBlossom = "cherryBlossom",
    Starry = "starry",
};

interface WeatherSystem {
    amount: number;
    audio?: string;
    generate: (ctx: CanvasRenderingContext2D) => Particle;
    move: (ctx: CanvasRenderingContext2D, particle: Particle) => Particle;
    draw: (ctx: CanvasRenderingContext2D, particle: Particle) => void;
}

const config: Record<Weather, WeatherSystem & Record<string, any>> = {
    sunny: {
        amount: 0,
        generate: () => ({ x: 0, y: 0, d: [] }),
        draw: () => {},
        move: (ctx, x) => x,
    },
    starry: {
        amount: 0,
        generate: () => ({ x: 0, y: 0, d: [] }),
        draw: () => {},
        move: (ctx, x) => x,
    },
    cherryBlossom: {
        amount: 20,
        generate: (ctx) => ({
            x: 0,
            y: 0,
            d: [],
        }),
        draw: (ctx, {}) => {

        },
        move: (ctx, {
            x,
            y,
            d: []
        }) => ({
            x,
            y,
            d: [],
        }),
    },
    snow: {
        amount: 150,
        opacity: "40",
        colors: [
            "#AAAACC",
            "#DDDDFF",
            "#CCCCDD",
            "#F3F3F3",
            "#F0FFFF",
        ],
        fonts: [
            "Times",
            "Arial",
            "Verdana",
        ],

        draw: (ctx, {
            x,
            y,
            d: [font, color, sinkSpeed, size, sway, mass, momentum]
        }) => {
            ctx.fillStyle = config.snow.colors[color] + config.snow.opacity;
            ctx.font = `${size}px ${config.snow.fonts[font]}`;
            ctx?.fillText("*", x + (Math.sin(momentum) * sway), y);
        },

        move: (ctx, {
            x,
            y,
            d: [font, color, sinkSpeed, size, sway, mass, momentum]
        }) => (y > ctx.canvas.height) ? config.snow.generate?.(ctx)! : ({
            x,
            y: y + sinkSpeed,
            d: [font, color, sinkSpeed, size, sway, mass, momentum + mass]
        }),

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: 0,
            d: [
                rand(config.snow.fonts.length),
                rand(config.snow.colors.length),
                rand(5),
                rand(5) + 20,
                rand(15) + 10,
                0.03 + (Math.random() / 10),
                0
            ],
        }),
    },
    rain: {
        amount: 250,
        audio: "/rain.mp3",
        opacity: "40",
        colors: [
            "#0000FF",
            "#0055EE",
            "#11F0CC",
        ],

        draw: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size]
        }) => {
            ctx.fillStyle = config.rain.colors[color] + config.rain.opacity;
            ctx.fillRect(x, y, size/2, size*3);
        },

        move: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size]
        }) => (y > ctx.canvas.height) ? config.rain.generate?.(ctx)! : ({
            x,
            y: y + sinkSpeed,
            d: [color, sinkSpeed, size]
        }),

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: 0,
            d: [
                rand(config.rain.colors.length),
                rand(15) + 15,
                rand(5) + 3,
            ],
        }),
    },
};

interface Particle {
    x: number;
    y: number;
    d: number[];
}

export const WeatherRenderer = () => {
    let [weather, setWeather] = useState<Weather>(
        [Weather.Sunny, Weather.Rain, Weather.Snow][rand(3)]
    );
    let store = useRef<Particle[]>([]);

    useBackgroundAudio(config[weather].audio);

    useEffect(() => {
        store.current = [];
        document.body.setAttribute("data-starry", (weather == Weather.Starry) + "");
    }, [weather]);
    
    let ref = useCanvas((ctx: CanvasRenderingContext2D) => {
        if(!store.current.length) {
            store.current = new Array(config[weather]?.amount || 0)
                .fill(1)
                .map(() => config[weather]?.generate?.(ctx)!);
            
            // premove
            new Array(config[weather]?.amount * 10).fill(1).forEach(() => {
                store.current = store.current.map((v) => config[weather]?.move?.(ctx, v)!);
            });
        }

        store.current = store.current.map((v) => config[weather]?.move?.(ctx, v) || v);

        for (let particle of store.current) {
            config[weather]?.draw?.(ctx, particle);
        }
    }, [weather]);

    return (
        <Box className="weatherRoot">
            <canvas
                className="weatherCanvas"
                ref={ref}
            />
            <Affix p="md">
                <Group>
                    <SegmentedControl
                        value={weather}
                        onChange={(v) => setWeather(v as Weather)}
                        data={[
                            { label: "☀️", value: Weather.Sunny },
                            { label: "🌧️", value: Weather.Rain },
                            { label: "❄️", value: Weather.Snow },
                            { label: "🌸", value: Weather.CherryBlossom },
                            { label: "✨", value: Weather.Starry },
                        ]}
                    />
                </Group>
            </Affix>
        </Box>
    );
}

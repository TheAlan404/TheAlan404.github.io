import { Affix, Box, Group, SegmentedControl, Stack } from "@mantine/core";
import { useState } from "react"
import { useCanvas } from "../utils/useCanvas";
import { useRef } from "react";
import { useEffect } from "react";
import { useBackgroundAudio } from "../utils/useBackgroundAudio";
import { rand, toRadians } from "../utils/utils";
import { MiniClock } from "../components/MiniClock";

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
    opacity?: number;
    generate: (ctx: CanvasRenderingContext2D) => Particle;
    move: (ctx: CanvasRenderingContext2D, particle: Particle, dt: number) => Particle;
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
        amount: 200,
        gravity: 2, //7.5 * Math.pow(10, -4),
        opacity: 0.3,
        sprites: new Array(12).fill(1).map((_, i) => {
            let img = new Image();
            img.src = `/img/cherry_sprites/cherry_${i}.png`;
            return img;
        }),

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: -(rand(ctx.canvas.height)),
            d: [
                rand(12), // sprite
                toRadians((rand() < 0.5) ? -30.0 : 30.0), // rotSpeed
                rand(), // particleRandom
                toRadians((rand() < 0.5) ? -5.0 : 5.0), // spinAcceleration
                0, // roll
                (rand() < 0.5) ? 10 : 15, // size
            ],
        }),

        draw: (ctx, {
            x,
            y,
            d: [sprite, rotSpeed, particleRandom, spinAcceleration, roll, size],
        }) => {
            ctx.translate( x, y );
            ctx.rotate( roll );
            ctx.drawImage( config.cherryBlossom.sprites[sprite], 0, 0, size, size);
            ctx.rotate( -roll );
            ctx.translate( -x, -y );
        },

        move: (ctx, {
            x,
            y,
            d: [sprite, rotSpeed, particleRandom, spinAcceleration, roll, size]
        }, dt) => (y > ctx.canvas.height) ? config.cherryBlossom.generate(ctx) : ({
            x: x + ((
                Math.cos(toRadians((particleRandom * 60))) * 2.0 * Math.pow(Math.min(Math.max(y, 0) / ctx.canvas.height, 1), 1.25)
            ) * 0.0025) * dt,
            y: y + (config.cherryBlossom.gravity  * dt),
            d: [
                sprite,
                rotSpeed + (spinAcceleration / 20) * dt,
                particleRandom,
                spinAcceleration,
                roll + ((rotSpeed / 20) * dt),
                size
            ],
        }),
    },
    snow: {
        amount: 150,
        opacity: 0.2,
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
            ctx.fillStyle = config.snow.colors[color];
            ctx.font = `${size}px ${config.snow.fonts[font]}`;
            ctx?.fillText("*", x + (Math.sin(momentum) * sway), y);
        },

        move: (ctx, {
            x,
            y,
            d: [font, color, sinkSpeed, size, sway, mass, momentum]
        }, dt) => (y > ctx.canvas.height) ? config.snow.generate(ctx) : ({
            x,
            y: y + (sinkSpeed * dt),
            d: [font, color, sinkSpeed, size, sway, mass, momentum + (mass * dt)]
        }),

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: 0,
            d: [
                rand(config.snow.fonts.length),
                rand(config.snow.colors.length),
                rand(5) + 1,
                rand(5) + 20,
                rand(15) + 10,
                0.03 + (Math.random() / 10),
                0
            ],
        }),
    },
    rain: {
        amount: 250,
        audio: "/audio/rain.mp3",
        opacity: 0.5,
        colors: [
            "#0000FF",
            "#0055EE",
            "#0a205a",
            "#0515a6",
        ],

        draw: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size]
        }) => {
            ctx.fillStyle = config.rain.colors[color];
            ctx.fillRect(x, y, size/2, size*3);
        },

        move: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size]
        }, dt) => (y > ctx.canvas.height) ? config.rain.generate?.(ctx)! : ({
            x,
            y: y + (sinkSpeed * dt),
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
    
    let ref = useCanvas((ctx, dt) => {
        if(!store.current.length) {
            store.current = new Array(config[weather]?.amount || 0)
                .fill(1)
                .map(() => config[weather]?.generate?.(ctx)!);
            
            // premove
            for(let i = 0; i < 500; i++) {
                store.current = store.current.map((v) => config[weather].move(ctx, v, 1));
            }
        }

        store.current = store.current.map((v) => config[weather].move(ctx, v, dt));

        if(config[weather].opacity)
            ctx.globalAlpha = config[weather].opacity;
        else
            ctx.globalAlpha = 1;
        ctx.imageSmoothingEnabled = false;

        for (let particle of store.current) {
            config[weather].draw(ctx, particle);
        }
    }, [weather]);

    return (
        <Box className="weatherRoot">
            <canvas
                className="weatherCanvas"
                ref={ref}
            />
            <Affix p="md" zIndex={300}>
                <Stack align="end" gap={5}>
                    <MiniClock />
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
                </Stack>
            </Affix>
        </Box>
    );
}

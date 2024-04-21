import { ActionIcon, Affix, Box, Group, SegmentedControl, Stack } from "@mantine/core";
import { useState } from "react"
import { useCanvas } from "../utils/useCanvas";
import { useRef } from "react";
import { useEffect } from "react";
import { useBackgroundAudio } from "../utils/useBackgroundAudio";
import { rand, toRadians } from "../utils/utils";
import { MiniClock } from "../components/MiniClock";
import { IconVolumeOff } from "@tabler/icons-react";
import { IconVolume } from "@tabler/icons-react";

enum Weather {
    Sunny = "sunny",
    Rain = "rain",
    Snow = "snow",
    CherryBlossom = "cherryBlossom",
    Starry = "starry",
};

interface Coord {
    x: number;
    y: number;
}

type Particle = Coord & {
    d: number[];
};

interface WeatherSystem {
    amount: number;
    audio?: string;
    opacity?: number;
    generate: (ctx: CanvasRenderingContext2D) => Particle;
    move: (ctx: CanvasRenderingContext2D, particle: Particle, dt: number, wind: Coord) => Particle;
    draw: (ctx: CanvasRenderingContext2D, particle: Particle) => void;
}

const INITIAL_TTL = 100;

const config: Record<Weather, WeatherSystem & Record<string, any>> = {
    sunny: {
        amount: 0,
        generate: () => ({ x: 0, y: 0, d: [] }),
        move: (ctx, x) => x,
        draw: () => {},
    },
    starry: {
        amount: 0,
        generate: () => ({ x: 0, y: 0, d: [] }),
        move: (ctx, x) => x,
        draw: () => {},
    },
    cherryBlossom: {
        amount: 0.1,
        audio: "https://tube.kuylar.dev/proxy/media/EjBdURAwJHI/251",
        gravity: 2, //7.5 * Math.pow(10, -4),
        opacity: 0.3,
        sprites: new Array(12).fill(1).map((_, i) => {
            let img = new Image();
            img.src = `/img/cherry_sprites/cherry_${i}.png`;
            return img;
        }),

        generate: (ctx) => ({
            x: rand(ctx.canvas.width * 1.1),
            y: -(rand(ctx.canvas.height)),
            d: [
                rand(12), // sprite
                toRadians((rand() < 0.5) ? -30.0 : 30.0), // rotSpeed
                rand(), // particleRandom
                toRadians(rand(10) - 5), // spinAcceleration
                0, // roll
                rand(5) + 10, // size
                INITIAL_TTL, // ttl
            ],
        }),

        move: (ctx, {
            x,
            y,
            d: [sprite, rotSpeed, particleRandom, spinAcceleration, roll, size, ttl]
        }, dt, wind) => ((y) > ctx.canvas.height) ? (
            (ttl <= 0) ? (config.cherryBlossom.generate(ctx)) : ({
                x,
                y,
                d: [
                    sprite,
                    rotSpeed,
                    particleRandom,
                    spinAcceleration,
                    roll,
                    size,
                    ttl - (1 * dt),
                ]
            })
        ) : ({
            x: x + ((
                Math.cos(toRadians((particleRandom * 60))) * 2.0 * Math.pow(Math.min(Math.max(y, 0) / ctx.canvas.height, 1), 1.25)
            ) * 0.0025) * dt + (wind.x * dt) + (-0.4 * dt),
            y: y + (config.cherryBlossom.gravity  * dt) + (wind.y * dt),
            d: [
                sprite,
                rotSpeed + (spinAcceleration / 20) * dt,
                particleRandom,
                spinAcceleration,
                roll + ((rotSpeed / 20) * dt),
                size + ((
                    Math.cos(
                        toRadians(
                            (particleRandom * 60)
                        )
                    )
                    * 2.0
                    * Math.pow(Math.min(Math.max(y, 0) / ctx.canvas.height, 1), 1.25)
                ) * 0.0025) * dt,
                ttl,
            ],
        }),

        draw: (ctx, {
            x,
            y,
            d: [sprite, rotSpeed, particleRandom, spinAcceleration, roll, size, ttl],
        }) => {
            //ctx.fillStyle = "#000000"
            //ctx.fillRect(x, y, 5, 5);
            ctx.translate( x, y );
            ctx.rotate( roll );
            let img = config.cherryBlossom.sprites[sprite] as HTMLImageElement;
            let a = ctx.globalAlpha;
            ctx.globalAlpha = (Math.max(0, ttl) / INITIAL_TTL) * a;
            ctx.drawImage( img, 0, 0, size, size);
            ctx.globalAlpha = a;
            ctx.rotate( -roll );
            ctx.translate( -x, -y );
        },
    },
    snow: {
        amount: 0.1,
        opacity: 0.2,
        //audio: "/audio/LittleDrummerGirl.mp3",
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

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: -rand(ctx.canvas.height),
            d: [
                rand(config.snow.fonts.length),
                rand(config.snow.colors.length),
                rand(5) + 1,
                rand(5) + 20,
                rand(15) + 10,
                0.03 + (Math.random() / 10), // mass
                0, // momentum
                INITIAL_TTL, // ttl
            ],
        }),

        move: (ctx, {
            x,
            y,
            d: [font, color, sinkSpeed, size, sway, mass, momentum, ttl]
        }, dt, wind) => (y > ctx.canvas.height) ? (
            (ttl <= 0) ? (config.snow.generate(ctx)) : ({
                x,
                y,
                d: [font, color, sinkSpeed, size, sway, mass, momentum, ttl - (1 * dt)]
            })
        ) : ({
            x: x + (wind.x * dt),
            y: y + (sinkSpeed * dt) + (wind.y * dt),
            d: [font, color, sinkSpeed, size, sway, mass, momentum + (mass * dt), ttl]
        }),

        draw: (ctx, {
            x,
            y,
            d: [font, color, sinkSpeed, size, sway, mass, momentum, ttl]
        }) => {
            ctx.fillStyle = config.snow.colors[color] + Math.round((Math.max(0, ttl) / INITIAL_TTL) * 255).toString(16).padStart(2, "0");
            ctx.font = `${size}px ${config.snow.fonts[font]}`;
            ctx?.fillText("*", x + (Math.sin(momentum) * sway), y);
        },
    },
    rain: {
        amount: 0.3,
        audio: "/audio/rain.mp3",
        opacity: 0.5,
        colors: [
            "#0000FF",
            "#0055EE",
            "#0a205a",
            "#0515a6",
        ],

        generate: (ctx) => ({
            x: rand(ctx.canvas.width),
            y: -rand(ctx.canvas.height * 2),
            d: [
                rand(config.rain.colors.length),
                rand(15) + 15,
                rand(5) + 3,
                0,
            ],
        }),

        move: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size, splash]
        }, dt, wind) => (y > ctx.canvas.height) ? (
            (splash > 100) ? config.rain.generate(ctx) : ({
                x,
                y,
                d: [color, sinkSpeed, size, splash + (5 * dt)]
            })
        ) : ({
            x: x + (wind.x * dt),
            y: y + (sinkSpeed * dt) + (wind.y * dt),
            d: [color, sinkSpeed, size, splash]
        }),

        draw: (ctx, {
            x,
            y,
            d: [color, sinkSpeed, size, splash]
        }) => {
            ctx.fillStyle = config.rain.colors[color];

            if(splash) {
                const f = (h) => -0.02 * Math.pow(h - 26, 2) + 13;
                ctx.fillRect(x + splash, y - 20 - f(splash), size/2, size/2);
                ctx.fillRect(x - splash, y - 20 - f(splash), size/2, size/2);
            } else {
                ctx.fillRect(x, y, size/2, size*3);
            }
        },
    },
};

export const WeatherRenderer = () => {
    let [weather, setWeather] = useState<Weather>(
        [Weather.Sunny, Weather.Rain, Weather.Snow][rand(3)]
    );
    let [muted, setMuted] = useState(false);
    let store = useRef<Particle[]>([]);
    let wind = useRef<Coord>({ x: 0, y: 0 });

    let audioUrl = config[weather].audio;
    let hasAudio = !!audioUrl;
    useBackgroundAudio(muted ? undefined : audioUrl);

    useEffect(() => {
        store.current = [];
        document.body.setAttribute("data-starry", (weather == Weather.Starry) + "");
    }, [weather]);
    
    let ref = useCanvas((ctx, dt) => {
        if(!store.current.length) {
            store.current = new Array(Math.floor(config[weather].amount * ctx.canvas.width))
                .fill(1)
                .map(() => config[weather].generate(ctx));
        }

        store.current = store.current.map((v) => config[weather].move(ctx, v, dt, wind.current));

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
                    <Group gap="xs">
                        <MiniClock />
                        <ActionIcon
                            disabled={!hasAudio}
                            onClick={() => setMuted(m => !m)}
                            size="sm"
                            color="dark"
                            variant="filled"
                        >
                            {muted && <IconVolumeOff />}
                            {!muted && <IconVolume />}
                        </ActionIcon>
                    </Group>
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

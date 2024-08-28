import { Coord } from "@/src/types";
import { useCanvas } from "@/src/utils/useCanvas";
import { useContext, useEffect, useRef } from "react";
import { Weather, WeatherContext } from "./Weather";
import { choose, clamp, lerp, randArr, randFloat, randInt, vec, vecAdd, vecDiv, vecMul, vecSafeNormalize, vecSub, vecTup } from "@/src/utils/utils";
import { useHotkeys } from "@mantine/hooks";
import { memoize, parseColor, toRgba } from "@mantine/core";
import { useAppScroll } from "@/src/utils/useAppScroll";
import { allImagesReady, textureWithColor } from "@/src/utils/textureWithColor";

const Textures: HTMLImageElement[] = (Array(4).fill(0).map((_, i) => {
    let img = new Image();
    img.src = `/assets/img/detail/starfield/0${i}.png`;
    return img;
}));

interface Starfield {
    config: StarfieldConfig;
    stars: Star[];
};

interface StarfieldConfig {
    yNodes: number[];
    flowSpeed: number;
    color: string;
    steps: number;
    dim: Dim;
    scroll: Coord;
    position: Coord;
};

interface Star {
    Texture: number;
    Position: Coord;
    Opacity: number;
    NodeIndex: number;
    NodePercent: number;
    Distance: number;
    Sine: number;
}

interface Dim {
    width: number;
    height: number;
};

const createYNodes = ({
    dim,
    steps,
}: Pick<StarfieldConfig, "dim" | "steps">): number[] => {
    let yNodes: number[] = [];
    let num = randFloat(dim.height);
    let num2 = 0;

    while (num2 < steps) {
        yNodes.push(num);
        num2++;
        num += choose(-1, 1) * (16 * 2 + randFloat(24 * 2));
    }

    for (let i = 0; i < 4; i++) {
        yNodes[yNodes.length - 1 - i] = lerp(
            yNodes[yNodes.length - 1 - i],
            yNodes[0],
            clamp(0, 1.0 - i / 4.0, 1)
        );
    }

    return yNodes;
};

type IncompleteStar = Pick<Star, "NodeIndex" | "NodePercent" | "Distance" | "Sine">;

const targetOfStar = ({
    steps,
    dim,
    yNodes,
}: StarfieldConfig, star: IncompleteStar) => {
    let StepSize = dim.width / (steps - 2);
    let vector = vec(star.NodeIndex * StepSize, yNodes[star.NodeIndex]);
    let vector2 = vec((star.NodeIndex + 1) * StepSize, yNodes[star.NodeIndex + 1]);
    let vector3 = vecAdd(vector, vecMul(vecSub(vector2, vector), vecTup(star.NodePercent)));
    let vector4 = vecSafeNormalize(vecSub(vector2, vector));
    let vector5 = vec(0.0 - vector4.y, vector4.x);
    return vecAdd(vector3, vecMul(vecMul(vector5, vecTup(star.Distance)), vecTup(Math.sin(star.Sine))));
}

const createStars = (config: StarfieldConfig) => {
    let stars = new Array(128).fill(0).map((): Star => {
        let num3 = randFloat(1.0);

        let incomplete: IncompleteStar = {
            NodeIndex: randInt(config.yNodes.length - 1),
            NodePercent: randFloat(1.0),
            Distance: 4.0 + num3 * 20.0,
            Sine: randFloat(Math.PI * 2.0),
        };

        let index = Math.floor(clamp(0.0, Math.pow(1.0 - num3, 3) * Textures.length, Textures.length - 1));

        return {
            ...incomplete,
            Position: targetOfStar(config, incomplete),
            Opacity: lerp(1, 0, num3 * 0.5),
            Texture: index,
        };
    });

    return stars;
};

const mod = (x: number, m: number) => (x % m + m) % m;

const renderStar = ({
    position,
    scroll,
    dim,
    color,
}: StarfieldConfig, star: Star, ctx: CanvasRenderingContext2D) => {
    let vector = vec(0, 0);
    vector.x = -64 + mod(star.Position.x - position.x * scroll.x, dim.width + 128);
    vector.y = -16 + mod(star.Position.y - position.y * scroll.y, dim.height + 32);
    let position2 = vector;

    let { x, y } = position2;
    ctx.globalAlpha = star.Opacity;
    ctx.drawImage(textureWithColor(Textures, star.Texture, color), x - 8, y - 8, 16, 16);
};

const updateStar = (config: StarfieldConfig, star: Star, dt: number = 1) => {
    star.Sine += dt * config.flowSpeed;
    star.NodePercent += dt * 0.25 * config.flowSpeed;
    if (star.NodePercent >= 1) {
        star.NodePercent -= 1;
        star.NodeIndex++;
        if (star.NodeIndex >= config.yNodes.length - 1) {
            star.NodeIndex = 0;
            star.Position.x = 0;
        }
    }
    star.Position = vecAdd(star.Position, vecDiv(vecSub(targetOfStar(config, star), star.Position), vecTup(50)));
};



const createStarfield = (partial: Partial<StarfieldConfig>): Starfield => {
    let config: StarfieldConfig = {
        dim: { width: 0, height: 0 },
        yNodes: [],
        color: "ffffff",
        flowSpeed: 1,
        position: vec(0, 0),
        scroll: vec(1, 1),
        steps: 15,
        ...partial,
    };

    config.yNodes = createYNodes(config);
    let stars = createStars(config);

    return {
        config,
        stars,
    };
};

const createStarfields = (x: Partial<StarfieldConfig>) => [
    createStarfield({ color: "ab6ffa", scroll: vec(0.3, 0.3), ...x }),
    createStarfield({ color: "53f3dd", scroll: vec(0.5, 0.5), ...x }),
    //createStarfield({ color: "71d5ff", scroll: vec(0.3, 0.3), flowSpeed: 2.5, ...x }),
    createStarfield({ color: "46fffd", scroll: vec(0.5, 0.5), flowSpeed: 2.75, ...x }),
    //createStarfield({ color: "f8ffb0", scroll: vec(0.3, 0.3), flowSpeed: 3, ...x }),
    //createStarfield({ color: "cefdff", scroll: vec(0.5, 0.5), flowSpeed: 3, ...x }),
    createStarfield({ color: "ffffff", scroll: vec(0.1, 0.1), flowSpeed: 1, ...x }),
];

export const StarryBackground = () => {
    const starfields = useRef<Starfield[]>([]);
    const isReady = useRef(false);
    allImagesReady(Textures).then(() => {
        isReady.current = true;
    });

    useHotkeys([["s", () => starfields.current = []]]);

    useAppScroll((scrollTop) => {
        for(let starfield of starfields.current) {
            starfield.config.position.y = scrollTop;
        }
    });

    let ref = useCanvas((ctx, dt) => {
        if(!ctx.canvas.width || !ctx.canvas.height) return console.log("wh zero");
        if(!isReady.current) return;

        ctx.imageSmoothingEnabled = false;

        if (!starfields.current.length || starfields.current.some(({ config }) => (
            config.dim.width !== ctx.canvas.width || config.dim.height !== ctx.canvas.height
        ))) {
            console.log("creating starfields");
            starfields.current = createStarfields({
                dim: {
                    width: ctx.canvas.width,
                    height: ctx.canvas.height,
                },
            });
        };

        for (let i = 0; i < starfields.current.length; i++) {
            let starfield = starfields.current[i];

            if (
                starfield.config.dim.width !== ctx.canvas.width
                || starfield.config.dim.height !== ctx.canvas.height
            ) {
                console.log("FUCK");
            }

            if(!starfield.stars.length) console.log("no stars");

            for (let star of starfield.stars) {
                updateStar(starfield.config, star, dt);
                renderStar(starfield.config, star, ctx);
            }
        }
    }, [], 0.1);

    return (
        <canvas
            className="pageBackground"
            ref={ref}
        />
    )
}

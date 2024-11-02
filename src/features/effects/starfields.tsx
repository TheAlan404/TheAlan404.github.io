import { Coord } from "@/src/types";
import { choose, clamp, lerp, randFloat, randInt, vec, vecAdd, vecDiv, vecMul, vecSafeNormalize, vecSub, vecTup } from "@/src/utils/utils";

export const STARFIELD_SCALE = 2;

export interface Starfield {
    config: StarfieldConfig;
    stars: Star[];
};

export interface StarfieldConfig {
    yNodes: number[];
    flowSpeed: number;
    color: string;
    dim: Dim;
    scroll: Coord;
    position: Coord;
    flash: number;
};

export interface Star {
    Texture: number;
    Position: Coord;
    Opacity: number;
    NodeIndex: number;
    NodePercent: number;
    Distance: number;
    Sine: number;
}

export interface Dim {
    width: number;
    height: number;
};

const steps = ({ width }: Dim) => Math.ceil(width/20);

const createYNodes = ({
    dim
}: Pick<StarfieldConfig, "dim">): number[] => {
    let yNodes: number[] = [];
    let num = randFloat(dim.height);
    let num2 = 0;

    while (num2 < steps(dim)) {
        yNodes.push(num);
        num2++;
        num += choose(-1, 1) * (16 * 2 + randFloat((24 * (dim.height/360)) * 2));
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
    dim,
    yNodes,
}: StarfieldConfig, star: IncompleteStar) => {
    let StepSize = dim.width / (steps(dim) - 1);
    let vector = {
        x: star.NodeIndex * StepSize,
        y: yNodes[star.NodeIndex],
    };
    let vector2 = {
        x: (star.NodeIndex + 1) * StepSize,
        y: yNodes[star.NodeIndex + 1],
    };
    let vector3 = vecAdd(vector, vecMul(vecSub(vector2, vector), vecTup(star.NodePercent)));
    let vector4 = vecSafeNormalize(vecSub(vector2, vector));
    //let vector5 = vec(0.0 - vector4.y, vector4.x);
    /* return vecAdd(vector3, vecMul(vecMul(vector5, vecTup(star.Distance)), vecTup(Math.sin(star.Sine))));

    let vec3 = {
        x: vector.x + (((vector2.x)-(vector.x))*(star.NodePercent)),
        y: vector.y + (((vector2.y)-(vector.y))*(star.NodePercent)),
    };

    let vec35 = {

    }; */

    return {
        x: (vector3.x) + (((-vector4.x)*(star.Distance))*(Math.sin(star.Sine))),
        y: (vector3.y) + (((vector4.y)*(star.Distance))*(Math.sin(star.Sine))),
    };
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

        let index = Math.floor(clamp(0.0, Math.pow(1.0 - num3, 3) * 4, 4 - 1));

        return {
            ...incomplete,
            Position: targetOfStar(config, incomplete),
            Opacity: lerp(0.6, 0, num3 * 0.5),
            Texture: index,
        };
    });

    return stars;
};

export const updateStar = (config: StarfieldConfig, star: Star, dt: number = 1) => {
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
        flash: 1,
        ...partial,
    };

    config.yNodes = createYNodes(config);
    let stars = createStars(config);

    return {
        config,
        stars,
    };
};

export const createStarfields = (x: Partial<StarfieldConfig>) => [
    //createStarfield({ color: "ffffff", scroll: vec(0.1, 0.1), flowSpeed: 1, ...x }),
    createStarfield({ color: "ab6ffa", scroll: vec(0.3, 0.3), ...x }),
    createStarfield({ color: "71d5ff", scroll: vec(0.3, 0.3), flowSpeed: 2.5, ...x }),
    //createStarfield({ color: "f8ffb0", scroll: vec(0.3, 0.3), flowSpeed: 3, ...x }),
    createStarfield({ color: "53f3dd", scroll: vec(0.5, 0.5), ...x }),
    //createStarfield({ color: "46fffd", scroll: vec(0.5, 0.5), flowSpeed: 2.75, ...x }),
    createStarfield({ color: "cefdff", scroll: vec(0.5, 0.5), flowSpeed: 3, ...x }),
];


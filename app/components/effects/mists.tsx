// import { Coord } from "@/src/types";
// import { createTextureStore } from "@/src/utils/textureWithColor";
// import { vec } from "@/src/utils/utils";

import { vec2, Vec2 } from "@alan404/vec2";

export const MIST_SCALE = 3;

// export const MistTextures = new Image();

interface Mist {
    color: string;
    speed: Vec2;
    scroll: Vec2;
}

export const createMists = (): Mist[] => [
    { color: "#7e2168ff", speed: vec2(2, 0), scroll: vec2(0.15, 0.15) },
    { color: "#2f7f98ff", speed: vec2(4, 0), scroll: vec2(0.2, 0.2) },
    { color: "#000000ff", speed: vec2(16, 8), scroll: vec2(0.6, 0.6) },
];

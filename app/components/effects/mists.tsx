import { Coord } from "@/src/types";
import { createTextureStore } from "@/src/utils/textureWithColor";
import { vec } from "@/src/utils/utils";

export const MIST_SCALE = 3;

export const MistTextures = createTextureStore([
    "/assets/img/detail/mist.png",
]);

interface Mist {
    color: string;
    speed: Coord;
    scroll: Coord;
}

export const createMists = (): Mist[] => [
    { color: "#7e2168ff", speed: vec(2, 0), scroll: vec(0.15, 0.15) },
    { color: "#2f7f98ff", speed: vec(4, 0), scroll: vec(0.2, 0.2) },
    { color: "#000000ff", speed: vec(16, 8), scroll: vec(0.6, 0.6) },
];

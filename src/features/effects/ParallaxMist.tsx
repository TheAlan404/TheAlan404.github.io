import { Coord } from "@/src/types";
import { createTextureStore, textureWithColor, useIsTextureStoreReady } from "@/src/utils/textureWithColor";
import { useAppScroll } from "@/src/utils/useAppScroll";
import { useCanvas } from "@/src/utils/useCanvas";
import { vec, vecAdd, vecFloor, vecMul, vecSub, vecTup } from "@/src/utils/utils";
import { useEffect, useRef } from "react";

const Textures = createTextureStore([
    "/assets/img/detail/mist.png",
    "/assets/img/detail/sky.png",
]);

interface Mist {
    color: string;
    speed: Coord;
    scroll: Coord;
    pos: Coord;
}

const createMists = (): Mist[] => [
    //{ color: "", speed: vec(0, 0), scroll: vec(0, 0), pos: vec(0, 0) },
    { color: "#7e2168", speed: vec(2, 0), scroll: vec(0.15, 0.15), pos: vec(0, 0) },
    { color: "#2f7f98", speed: vec(4, 0), scroll: vec(0.2, 0.2), pos: vec(0, 0) },
    { color: "#000000", speed: vec(16, 8), scroll: vec(0.6, 0.6), pos: vec(0, 0) },
];

const updateMist = (mist: Mist, dt: number) => {
    mist.pos = vecAdd(mist.pos, vecMul(mist.speed, vecTup(dt)));
};

const renderMist = (
    ctx: CanvasRenderingContext2D,
    mist: Mist,
    offset: Coord,
) => {
    let vector = vecFloor(vecSub(mist.pos, vecMul(vecFloor(offset), mist.scroll)));
    let tex = !mist.color.length ? Textures[1] : textureWithColor(Textures, 0, mist.color);

    while (vector.x < 0)
        vector.x += tex.width;

    while (vector.x > 0)
        vector.x -= tex.width;

    while (vector.y < 0)
        vector.y += tex.height;

    while (vector.y > 0)
        vector.y -= tex.height;

    for (let x = vector.x; x < ctx.canvas.width; x += tex.width) {
        for (let y = vector.y; y < ctx.canvas.height; y += tex.height) {
            ctx.drawImage(tex, x, y);
        }
    }
};

export const ParallaxMist = () => {
    const mists = useRef(createMists());
    const scrollTop = useRef(0);
    let isLoaded = useIsTextureStoreReady(Textures);

    const ref = useCanvas((ctx, dt) => {
        if (!isLoaded.current) return;

        for (let mist of mists.current) {
            updateMist(mist, dt);
            renderMist(ctx, mist, { x: 0, y: scrollTop.current });
        }
    }, [], 5);

    useAppScroll((y) => {
        scrollTop.current = y;
    });

    return (
        <canvas
            className="pageBackground"
            ref={ref}
        />
    )
};

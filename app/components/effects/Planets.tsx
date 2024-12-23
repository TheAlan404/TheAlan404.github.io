import { Coord } from "@/src/types";
import { allImagesReady, createTextureStore, textureWithColor, textureWithColorDataURL } from "@/src/utils/textureWithColor";
import { useAnimationFrame } from "@/src/utils/useAnimationFrame";
import { useAppScroll } from "@/src/utils/useAppScroll";
import { useCanvas } from "@/src/utils/useCanvas";
import { randInt, vec, vecAdd, vecFloor, vecMul, vecSub, vecTup } from "@/src/utils/utils";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const SCALE = 2;

const BigTextures = createTextureStore([
    "/assets/img/detail/planets/big00.png",
    "/assets/img/detail/planets/big01.png",
]);

const SmallTextures = createTextureStore([
    "/assets/img/detail/planets/small00.png",
    "/assets/img/detail/planets/small01.png",
    "/assets/img/detail/planets/small02.png",
    "/assets/img/detail/planets/small03.png",
    "/assets/img/detail/planets/small04.png",
    "/assets/img/detail/planets/small05.png",
    "/assets/img/detail/planets/small06.png",
]);

const AllTextures = [...BigTextures, ...SmallTextures];

interface PlanetsConfig {
    count: number;
    size: "small" | "big";
    scroll: Coord;
    color: string;
}

interface PlanetSprite {
    texture: number;
    position: Coord;
    scroll: Coord;
    color: string;
}

const createPlanets = (): PlanetSprite[] => [
    ...createPlanetSprites({ size: "small", count: 32, scroll: vec(0.1, 0.1), color: "#444444ff" }),
    ...createPlanetSprites({ size: "small", count: 32, scroll: vec(0.4, 0.4), color: "#eeeeeeff" }),
    //...createPlanetSprites({ size: "big", count: 2, scroll: vec(0.7, 0.7), color: "#ffffffff" }),
];

const createPlanetSprites = ({
    count,
    size,
    scroll,
    color,
}: PlanetsConfig): PlanetSprite[] => {
    let planets: PlanetSprite[] = [];
    for(let i = 0; i < count; i++) {
        planets.push({
            position: vec(Math.random(), Math.random()),
            texture: (size == "small" ? BigTextures.length : 0) + randInt(size == "small" ? SmallTextures.length-1 : BigTextures.length-1),
            scroll,
            color,
        })
    }
    return planets;
};

export const Planets = () => {
    const scrollTop = useRef(0);
    const isReady = useRef(false);

    allImagesReady(AllTextures).then(() => isReady.current = true);

    useAppScroll((y) => {
        scrollTop.current = y;
    });

    const planets = useRef(createPlanets());

    const ref = useCanvas((ctx) => {
        if(!isReady.current) return;

        const mod = (x: number, m: number) => (x % m + m) % m;
        
        for(let planet of planets.current) {
            let x = mod((planet.position.x * ctx.canvas.width), ctx.canvas.width);
            let y = mod((planet.position.y * ctx.canvas.height) - scrollTop.current * planet.scroll.y, ctx.canvas.height);

            ctx.drawImage(textureWithColor(AllTextures, planet.texture, planet.color), x, y);
        }
    }, [], 10);

    if(!isReady) return;

    return (
        <canvas
            ref={ref}
            className="pageBackground"
        />
    )
};

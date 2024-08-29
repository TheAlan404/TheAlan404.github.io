import { Coord } from "@/src/types";
import { allImagesReady, createTextureStore, textureWithColorDataURL } from "@/src/utils/textureWithColor";
import { useAnimationFrame } from "@/src/utils/useAnimationFrame";
import { useAppScroll } from "@/src/utils/useAppScroll";
import { vec, vecAdd, vecFloor, vecMul, vecSub, vecTup } from "@/src/utils/utils";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const SCALE = 2;

const Textures = createTextureStore([
    "/assets/img/detail/mist.png",
]);

interface Mist {
    color: string;
    speed: Coord;
    scroll: Coord;
}

const createMists = (): Mist[] => [
    { color: "#7e2168", speed: vec(2, 0), scroll: vec(0.15, 0.15) },
    { color: "#2f7f98", speed: vec(4, 0), scroll: vec(0.2, 0.2) },
    { color: "#000000", speed: vec(16, 8), scroll: vec(0.6, 0.6) },
];

export const ParallaxMist = () => {
    const scrollTop = useRef(0);
    const [isReady, setIsReady] = useState(false);

    if(!isReady) allImagesReady(Textures).then(() => setIsReady(true));

    useAppScroll((y) => {
        scrollTop.current = y;
    });

    if(!isReady) return;

    return (
        createMists().map((mist, i) => (
            <Mist
                mist={mist}
                scrollTop={scrollTop}
                key={i}
            />
        ))
    )
};

const Mist = ({
    mist,
    scrollTop,
}: {
    mist: Mist;
    scrollTop: MutableRefObject<number>;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const pos = useRef<Coord>(vec(0, 0));

    useAnimationFrame((dt) => {
        if(!ref.current) return;

        pos.current = vecAdd(pos.current, vecMul(mist.speed, vecTup(dt)));
        ref.current.style.backgroundPosition = `${pos.current.x}px ${pos.current.y - scrollTop.current * mist.scroll.y}px`;
    }, { fps: 5 });

    let url = textureWithColorDataURL(Textures, 0, mist.color);

    return (
        <div
            ref={ref}
            className="pageBackground mist"
            style={{
                backgroundImage: `url("${url}")`,
                backgroundSize: `${600 * SCALE}px ${600 * SCALE}px`,
            }}
        />
    );
};

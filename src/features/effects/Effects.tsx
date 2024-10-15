import { useEffect, useRef, useState } from "react";
import { createMists, MIST_SCALE, MistTextures } from "./ParallaxMist";
import { createStarfields, renderStar, Starfield, STARFIELD_SCALE, StarfieldTextures, updateStar } from "./starfields";
import { allImagesReady, textureWithColorDataURL } from "@/src/utils/textureWithColor";
import { useAppScroll } from "@/src/utils/useAppScroll";
import { vec, vecAdd, vecMul, vecTup } from "@/src/utils/utils";
import { useCanvas } from "@/src/utils/useCanvas";
import { Coord } from "@/src/types";

export const Effects = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!isReady) allImagesReady([
            ...MistTextures,
            ...StarfieldTextures,
        ]).then(() => {
            setIsReady(true);
        });
    }, [isReady]);

    const scrollTop = useRef(0);
    useAppScroll((y) => {
        scrollTop.current = y;
    });

    // Mist
    const mists = createMists();
    const mistRefs = useRef<(HTMLDivElement | null)[]>(mists.map(() => null));
    const mistPositions = useRef<Coord[]>(mists.map(_ => vec(0, 0)));

    // Starfield
    //const starfieldRef = useRef<HTMLCanvasElement>(null);
    const starfields = useRef<Starfield[]>([]);

    const canvasRef = useCanvas((ctx, dt) => {
        // Mist
        for (let i = 0; i < mists.length; i++) {
            const mist = mists[i];
            mistPositions.current[i] = vecAdd(mistPositions.current[i], vecMul(mist.speed, vecTup(dt * 100)));
            let ref = mistRefs.current[i];
            if (ref)
                ref.style.backgroundPosition = `${mistPositions.current[i].x}px ${mistPositions.current[i].y - scrollTop.current * mist.scroll.y}px`;
        }

        // Starfields
        if (!isReady) return;

        let currentDim = {
            width: ctx.canvas.width / STARFIELD_SCALE,
            height: ctx.canvas.height / STARFIELD_SCALE,
        };

        if (!starfields.current.length || starfields.current.some(({ config }) => (
            config.dim.width !== currentDim.width || config.dim.height !== currentDim.height
        ))) {
            starfields.current = createStarfields({
                dim: currentDim,
            });
        };

        for (let i = 0; i < starfields.current.length; i++) {
            let starfield = starfields.current[i];

            starfield.config.position.y = scrollTop.current / STARFIELD_SCALE;

            for (let star of starfield.stars) {
                updateStar(starfield.config, star, dt);
                renderStar(starfield.config, star, ctx);
            }
        }
    }, [isReady], 0.1);

    return (
        <div>
            <canvas
                className="pageBackground"
                style={{
                    width: "50vw",
                    height: "50vh",
                    transformOrigin: "0 0",
                    transform: `scale(2)`,
                    imageRendering: "pixelated",
                }}
                ref={canvasRef}
            />

            {isReady && (
                <div className="mist-container">
                    {mists.map((mist, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                mistRefs.current[i] = el;
                            }}
                            className="pageBackground mist"
                            style={{
                                backgroundImage: `url("${textureWithColorDataURL(MistTextures, 0, mist.color)}")`,
                                backgroundSize: `${600 * MIST_SCALE}px ${600 * MIST_SCALE}px`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};

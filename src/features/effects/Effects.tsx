import { useEffect, useRef, useState } from "react";
import { createMists, MIST_SCALE, MistTextures } from "./ParallaxMist";
import { createStarfields, Starfield, STARFIELD_SCALE, updateStar } from "./starfields";
import { allImagesReady, textureWithColorDataURL, useImagesReady } from "@/src/utils/textureWithColor";
import { clamp, vec, vecAdd, vecMul, vecTup } from "@/src/utils/utils";
import { Coord } from "@/src/types";
import { useCanvasWebGL } from "@/src/utils/useCanvasWebGL";
import { createProgramBuffers, initializeWebGL, renderProgramBuffers } from "./starfieldsWebGL";
import { useHotkeys } from "@mantine/hooks";

export const Effects = () => {
    const isReady = useImagesReady(MistTextures);

    const opacityBurstRef = useRef<number>(Date.now());
    const speedMultiplierRef = useRef<number>(0);

    useHotkeys([
        ["w", () => {
            opacityBurstRef.current = Date.now();
        }],
    ]);

    // Mist
    const mists = createMists();
    const mistRefs = useRef<(HTMLDivElement | null)[]>(mists.map(() => null));
    const mistPositions = useRef<Coord[]>(mists.map(_ => vec(0, 0)));

    // Starfield
    //const starfieldRef = useRef<HTMLCanvasElement>(null);
    const starfields = useRef<Starfield[]>([]);

    const canvasRef = useCanvasWebGL({
        fps: 0.2,
        initializeStore: (gl) => initializeWebGL(gl),
        disposeStore: (gl, store) => {
            gl.deleteProgram(store.program);
            for(let tex of store.textures) gl.deleteTexture(tex);
        },
        render(gl, store, dt) {
            // Mist
            for (let i = 0; i < mists.length; i++) {
                const mist = mists[i];
                mistPositions.current[i] = vecAdd(mistPositions.current[i], vecMul(mist.speed, vecTup(dt * 100)));
                let ref = mistRefs.current[i];
                if (ref)
                    ref.style.backgroundPosition = `${mistPositions.current[i].x}px ${mistPositions.current[i].y - window.scrollY * mist.scroll.y}px`;
            }

            // Starfields

            let currentDim = {
                width: gl.canvas.width / STARFIELD_SCALE,
                height: gl.canvas.height / STARFIELD_SCALE,
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

                starfield.config.position.y = window.scrollY / STARFIELD_SCALE;

                const decay = 200;
                let elapsed = Date.now() - opacityBurstRef.current;
                elapsed = elapsed ** 1/2;
                elapsed = clamp(0, elapsed, decay);
                starfield.config.flash = 1 - (elapsed / decay);

                for (let star of starfield.stars) {
                    updateStar(starfield.config, star, dt + (dt * speedMultiplierRef.current));
                }

                const buffers = createProgramBuffers(gl, starfield.stars);
                renderProgramBuffers({
                    gl,
                    buffers,
                    store,
                    config: starfield.config,
                    stars: starfield.stars,
                });
            }
        },
    });

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

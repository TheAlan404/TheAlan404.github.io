import { useEffect, useRef, useState } from "react";
import { createMists, MIST_SCALE, MistTextures } from "./mists";
import { createStarfields, Starfield, STARFIELD_SCALE, updateStar } from "./starfields";
import { clamp, vec, vecAdd, vecMul, vecTup } from "@alan404/vec2";
import { useCanvasWebGL } from "./useCanvasWebGL";
import { createProgramBuffers, initializeWebGL, renderProgramBuffers } from "./starfieldsWebGL";
import { useHotkeys } from "@mantine/hooks";

declare global {
    interface Window {
        _lastFlash?: number;
    }
}

export const Effects = () => {
    const isReady = useImagesReady(MistTextures);

    const opacityBurstRef = useRef<number>(Date.now());
    const speedBurstRef = useRef<number>(0);

    useHotkeys([
        ["w", () => {
            opacityBurstRef.current = Date.now();
            speedBurstRef.current = Date.now();
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
                let x = mistPositions.current[i].x;
                let y = mistPositions.current[i].y - window.scrollY * mist.scroll.y;
                //x = x % window.innerWidth;
                //y = y % window.innerHeight;
                if (ref)
                    //ref.style.transform = transform;
                    ref.style.backgroundPosition = `${Math.round(x)}px ${Math.round(y)}px`;
            }

            // Starfields

            let currentDim = {
                width: (gl.canvas as HTMLCanvasElement).clientWidth / STARFIELD_SCALE,
                height: (gl.canvas as HTMLCanvasElement).clientHeight / STARFIELD_SCALE,
            };

            if (!starfields.current.length || starfields.current.some(({ config }) => (
                config.dim.width !== currentDim.width || config.dim.height !== currentDim.height
            ))) {
                console.debug("Starfields recreated");
                starfields.current = createStarfields({
                    dim: currentDim,
                });
                gl.viewport(0, 0, currentDim.width * STARFIELD_SCALE, currentDim.height * STARFIELD_SCALE);
            };

            for (let i = 0; i < starfields.current.length; i++) {
                let starfield = starfields.current[i];

                starfield.config.position.y = window.scrollY / STARFIELD_SCALE;

                const easer = (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10);
                const burst = (d: number, decay = 200) => {
                    let elapsed = Date.now() - d;
                    elapsed = clamp(0, elapsed, decay);
                    let i = elapsed / decay;
                    return easer(1-i);
                };
                
                starfield.config.flash = burst(Math.max(...[
                    opacityBurstRef.current,
                    window._lastFlash || 0,
                ]), 500);

                let speedF = burst(speedBurstRef.current, 500);
                for (let star of starfield.stars) {
                    updateStar(starfield.config, star, dt + (dt * speedF * 5));
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
                    width: `${100/STARFIELD_SCALE}vw`,
                    height: `${100/STARFIELD_SCALE}vh`,
                    transformOrigin: "0 0",
                    transform: `scale(${STARFIELD_SCALE})`,
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
                                backgroundRepeat: "repeat",
                                opacity: "0.5",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};

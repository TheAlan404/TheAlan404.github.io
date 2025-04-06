import { vec2, Vec2 } from "@alan404/vec2";
import { Effect, EffectsWorkerInput, EffectsWorkerOutput } from "./types";
import { FarewellBackgroundEffect } from "../farewell/FarewellBackgroundEffect";
import { match } from "@alan404/enum";

let canvas: OffscreenCanvas;
let gl: WebGL2RenderingContext;
let store: Effect[] = [];
let lastTime = performance.now();

function startLoop() {
    function renderLoop(time: number) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        for (let effect of store) {
            effect.render();
        }

        requestAnimationFrame(renderLoop);
    }

    function updateLoop() {
        const now = performance.now();
        const dt = (now - lastTime) / 1000;
        lastTime = now;

        for (let effect of store) {
            effect.update(dt);
        }

        setTimeout(updateLoop, 1000 / 24); // 24 fps
    }

    requestAnimationFrame(renderLoop);
    updateLoop();
}

self.onmessage = (e: MessageEvent<EffectsWorkerInput>) => {
    const msg = e.data;

    match(msg)({
        init: ({ canvas: cv, dimensions }) => {
            canvas = cv;
            const ctx = canvas.getContext("webgl2", {
                antialias: false,
                powerPreference: "low-power",
                desynchronized: true,
                failIfMajorPerformanceCaveat: true,
            });
            if (!ctx) {
                console.error("WebGL2 not supported");
                return;
            }

            gl = ctx;

            store = [
                new FarewellBackgroundEffect(gl)
            ]

            for (let effect of store) {
                effect.onDimensionsChange(dimensions);
            }

            canvas.width = dimensions.x;
            canvas.height = dimensions.y;
            gl.viewport(0, 0, dimensions.x, dimensions.y);

            self.postMessage({ type: "initialized" } as EffectsWorkerOutput);

            startLoop();
        },

        dimensionsChange: ({ dimensions }) => {
            canvas.width = dimensions.x;
            canvas.height = dimensions.y;
            gl.viewport(0, 0, dimensions.x, dimensions.y);

            for (let effect of store) {
                effect.onDimensionsChange(dimensions);
            }
        },

        mousemove: ({ pos }) => {
            for (let effect of store) {
                effect.onMouseMove(pos);
            }
        },
    });
};

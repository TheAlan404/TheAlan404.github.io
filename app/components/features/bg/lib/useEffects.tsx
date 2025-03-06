import { useEffect, useRef } from "react";
import { useWebGL } from "./useWebGL";
import { Effect } from "./types";
import { FarewellBackgroundEffect } from "../farewell/FarewellBackgroundEffect";
import { vec2, Vec2, vec2eq } from "@alan404/vec2";
import { useRequestAnimationFrame } from "./useRequestAnimationFrame";
import { useUpdateInterval } from "./useUpdateInterval";
import { useWindowEvent } from "@mantine/hooks";
import { MistBackgroundEffect } from "../farewell/MistBackgroundEffect";

export const useEffects = () => {
    const store = useRef<Effect[]>([]);

    const updateDimensions = (dim: Vec2) => {
        for (let effect of store.current) {
            if (!vec2eq(dim, effect.dimensions)) {
                effect.onDimensionsChange(dim);
            }
        }
    };

    const { ref, gl } = useWebGL({
        onInitialize: (gl) => {
            store.current = [
                // new MistBackgroundEffect(gl),
                new FarewellBackgroundEffect(gl),
            ];

            updateDimensions({
                x: gl.canvas.width,
                y: gl.canvas.height,
            });
        },
        onDestroy: () => {
            store.current = [];
        },
        onResize: (dim) => {
            updateDimensions(dim);
        },
    });

    // useEffect(() => {
    //     if(gl.current) {
    //         store.current = [
    //             // new MistBackgroundEffect(gl.current),
    //             new FarewellBackgroundEffect(gl.current),
    //         ];

    //         updateDimensions({
    //             x: gl.current.canvas.width,
    //             y: gl.current.canvas.height,
    //         });
    //     }
    // }, [FarewellBackgroundEffect]);

    useRequestAnimationFrame({
        render: () => {
            gl.current?.clearColor(0, 0, 0, 0);
            gl.current?.clear(gl.current.COLOR_BUFFER_BIT);

            for (let effect of store.current)
                effect.render();
        },
    });

    useUpdateInterval({
        fps: 30,
        update: () => {
            for (let effect of store.current)
                effect.update(0.5);
        },
    });

    useWindowEvent("mousemove", (e) => {
        for (let effect of store.current)
            effect.onMouseMove(vec2(e.clientX, e.clientY));
    });

    return {
        ref,
        gl,
        store,
    };
};

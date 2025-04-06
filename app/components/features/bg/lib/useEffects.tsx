import { useEffect, useRef } from "react";
import { Effect, EffectsWorkerInput, EffectsWorkerOutput } from "./types";
import { vec2, Vec2, vec2eq } from "@alan404/vec2";
import { useWindowEvent } from "@mantine/hooks";
import EffectsWorker from './effects.worker.ts?worker';
import { match } from "@alan404/enum";

// type EffectConstructor = new (gl: WebGL2RenderingContext) => Effect;

export const useEffects = ({
    // effects,
    onDimensionsChange,
    onInitialized,
}: {
    // effects: [string][];
    onDimensionsChange?: (dims: Vec2) => void;
    onInitialized?: () => void;
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const offscreen = canvas.transferControlToOffscreen();
        const worker = new EffectsWorker();

        workerRef.current = worker;

        worker.postMessage({
            type: "init",
            data: {
                canvas: offscreen,
                dimensions: {
                    x: canvas.clientWidth,
                    y: canvas.clientHeight,
                },
            },
        } as EffectsWorkerInput, [offscreen]);

        worker.onmessage = (e: MessageEvent<EffectsWorkerOutput>) => {
            const msg = e.data;
            match(msg)({
                initialized: () => {
                    console.log("Effects worker initalized");
                },
            });
        };

        return () => {
            worker.terminate();
            workerRef.current = null;
        };
    }, []);

    useWindowEvent("mousemove", (e) => {
        const pos = vec2(e.clientX, e.clientY);
        workerRef.current?.postMessage({
            type: "mousemove",
            data: {
                pos,
            },
        } as EffectsWorkerInput);
    });

    useWindowEvent("resize", () => {
        if (!canvasRef.current) return;
        const dimensions = vec2(
            canvasRef.current.clientWidth,
            canvasRef.current.clientHeight,
        );
        workerRef.current?.postMessage({
            type: "dimensionsChange",
            data: {
                dimensions,
            },
        } as EffectsWorkerInput);
    });

    return {
        ref: canvasRef,
    };
};

import { useWindowEvent } from "@mantine/hooks";
import { useEffect } from "react";
import { useRef } from "react";

export const useCanvas = (
    render: (ctx: CanvasRenderingContext2D, dt: number) => void,
    deps: React.DependencyList,
) => {
    let ref = useRef<HTMLCanvasElement>(null);
    let lastDraw = useRef(Date.now());

    useEffect(() => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
    }, [ref.current]);

    useWindowEvent("resize", () => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
    });

    useEffect(() => {
        if(!ref.current) return;
        let frame = 0;

        let ctx = ref.current.getContext("2d");
        if (!ctx) return;

        const perfectFrameTime = 1000 / 60;
        const renderer: FrameRequestCallback = (timestamp) => {
            frame = requestAnimationFrame(renderer);
            let deltaTime = (timestamp - lastDraw.current) / perfectFrameTime;
            lastDraw.current = timestamp;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            render(ctx, Math.min(deltaTime, 5));
        }

        requestAnimationFrame(renderer);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [ref.current, render, ...deps]);

    return ref;
};

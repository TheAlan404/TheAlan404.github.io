import { useWindowEvent } from "@mantine/hooks";
import { useEffect } from "react";
import { useRef } from "react";

export const useCanvas = (
    render: (ctx: CanvasRenderingContext2D, dt: number) => void,
    deps: React.DependencyList,
    fps: number = 60,
) => {
    let ref = useRef<HTMLCanvasElement>(null);
    let lastDraw = useRef(performance.now());

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

        const perfectFrameTime = 1000 / fps;
        const renderer: FrameRequestCallback = (timestamp) => {
            let deltaTime = (timestamp - lastDraw.current) / perfectFrameTime;
            lastDraw.current = timestamp;
            
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            render(ctx, Math.min(deltaTime, perfectFrameTime * fps));
            frame = requestAnimationFrame(renderer);
        }

        frame = requestAnimationFrame(renderer);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [ref.current, render, ...deps]);

    return ref;
};

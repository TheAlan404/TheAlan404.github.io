import { useWindowEvent } from "@mantine/hooks";
import { useEffect } from "react";
import { useRef } from "react";
import { useAnimationFrame } from "./useAnimationFrame";

export const useCanvas = (
    render: (ctx: CanvasRenderingContext2D, dt: number) => void,
    deps: React.DependencyList,
    fps: number = 60,
) => {
    let ref = useRef<HTMLCanvasElement | null>(null);
    let ctx = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
        ctx.current = ref.current.getContext("2d");
        return () => {
            ctx.current = null;
        };
    }, [ref.current]);

    useWindowEvent("resize", () => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
    });

    useAnimationFrame((dt) => {
        if(!ctx.current) return;
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
        render(ctx.current, dt);
    }, {
        fps
    });

    return ref;
};

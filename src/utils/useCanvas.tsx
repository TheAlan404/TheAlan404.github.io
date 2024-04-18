import { useWindowEvent } from "@mantine/hooks";
import { useEffect } from "react";
import { useRef } from "react";

export const useCanvas = (
    render: (ctx: CanvasRenderingContext2D) => void,
    deps: React.DependencyList,
) => {
    let ref = useRef<HTMLCanvasElement>(null);

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

        const renderer = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            
            render(ctx);

            frame = requestAnimationFrame(renderer);
        }

        requestAnimationFrame(renderer);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [ref.current, ...deps]);

    return ref;
};

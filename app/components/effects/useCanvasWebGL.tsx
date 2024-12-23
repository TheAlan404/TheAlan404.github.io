import { useWindowEvent } from "@mantine/hooks";
import { useEffect } from "react";
import { useRef } from "react";
import { useAnimationFrame } from "./useAnimationFrame";

export const useCanvasWebGL = <T,>({
    initializeStore,
    disposeStore,
    render,
    fps = 30,
}: {
    initializeStore: (gl: WebGL2RenderingContext) => T;
    disposeStore?: (gl: WebGL2RenderingContext, store: T) => void;
    render: (gl: WebGL2RenderingContext, store: T, delta: number) => void;
    fps?: number;
}) => {
    let ref = useRef<HTMLCanvasElement | null>(null);
    let gl = useRef<WebGL2RenderingContext | null>(null);
    let store = useRef<T | null>(null);

    useEffect(() => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
        gl.current = ref.current.getContext("webgl2", {
            antialias: false,
            powerPreference: "low-power",
            desynchronized: true,
            failIfMajorPerformanceCaveat: true,
        });
        store.current = initializeStore(gl.current!);
        return () => {
            if(store.current) disposeStore?.(gl.current!, store.current);
            gl.current = null;
        };
    }, [ref.current]);

    useWindowEvent("resize", () => {
        if(!ref.current) return;
        ref.current.width = ref.current.clientWidth;
        ref.current.height = ref.current.clientHeight;
    });

    useAnimationFrame((dt) => {
        if(!gl.current || !store.current) return;
        render(gl.current, store.current, dt);
    }, {
        fps
    });

    return ref;
};

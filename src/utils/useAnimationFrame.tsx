import React, { useEffect } from "react";

export const useAnimationFrame = (
    cb: (dt: number) => void,
    { fps = 60, deps = [] }: { fps?: number, deps?: React.DependencyList } = {}
) => {
    useEffect(() => {
        let frame = 0;
        let lastDraw = performance.now();

        const perfectFrameTime = 1000 / fps;
        const renderer: FrameRequestCallback = (timestamp) => {
            let deltaTime = (timestamp - lastDraw) / perfectFrameTime;
            lastDraw = timestamp;
            
            let dt = Math.min(deltaTime, perfectFrameTime * fps);
            cb(dt);
            frame = requestAnimationFrame(renderer);
        }

        frame = requestAnimationFrame(renderer);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [cb, ...deps]);
};


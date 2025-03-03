import { useEffect } from "react";

export const useUpdateInterval = ({
    update,
    fps = 30,
}: {
    update: () => void;
    fps?: number;
}) => {
    useEffect(() => {
        const i = setInterval(() => {
            update();
        }, 1000/fps);
        return () => clearInterval(i);
    }, [update, fps]);
};

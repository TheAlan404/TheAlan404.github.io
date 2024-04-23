import { useEffect } from "react";

export const useSetInterval = (
    fn: () => void,
    interval: number,
    deps: React.DependencyList,
) => {
    useEffect(() => {
        let i = setInterval(fn, interval);

        return () => clearInterval(i);
    }, [fn, interval, ...deps]);
};

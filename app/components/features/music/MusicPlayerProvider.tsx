import { PropsWithChildren, useEffect, useRef } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

export const MusicPlayerProvider = ({
    children,
}: PropsWithChildren) => {
    const ref = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        ref.current = new Audio();
    }, []);

    return (
        <MusicPlayerContext.Provider
            value={{
                ref,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};

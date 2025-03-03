import { createContext, Ref, useContext } from "react";

export interface IMusicPlayer {
    ref: Ref<HTMLAudioElement | null>;
};

export const MusicPlayerContext = createContext<IMusicPlayer>({
    ref: { current: null },
});

export const useMusicPlayer = () => useContext(MusicPlayerContext);

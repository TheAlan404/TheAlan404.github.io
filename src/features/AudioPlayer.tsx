import { useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";

export interface AudioPlayerAPI {
    volume: number;
    setVolume: (v: number) => void;
    isPlaying: boolean;
    play: (url?: string) => void;
    pause: () => void;
}

export const AudioContext = createContext<AudioPlayerAPI>({
    isPlaying: false,
    volume: 1,
    pause() {},
    play() {},
    setVolume() {},
});



export const AudioPlayerProvider = ({
    children
}: PropsWithChildren) => {
    let [url, setURL] = useState();
    let [volume, setVolume] = useState();
    let [nowPlaying, setNowPlaying] = useState<Song>();

    return (
        <AudioContext.Provider
            value={{

            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

import { useEffect, useMemo, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";
import { Song } from "../../data/Songs";

export type AudioPlayerAPI = {
    volume: number;
    setVolume: (v: number) => void;
    playing: boolean;
    setSong: (song: Song) => void;
    play: () => void;
    pause: () => void;
}

export const AudioContext = createContext<AudioPlayerAPI>({
    playing: false,
    volume: 1,
    play() {},
    pause() {},
    setSong() {},
    setVolume() {},
});

export const AudioPlayerProvider = ({
    children
}: PropsWithChildren) => {
    let [song, setSong] = useState<Song | null>(null);
    let [playing, setPlaying] = useState(false);
    let [volume, setVolume] = useState(1);

    let ref = useRef(useMemo(() => new Audio(), []));

    useEffect(() => {
        if(!song) {
            ref.current.pause();
            setPlaying(false);
            return;
        };

        ref.current.src = song.src;
    }, [song]);

    useEffect(() => {
        ref.current.onpause = () => setPlaying(false);
        ref.current.onplaying = () => setPlaying(true);
    }, []);

    useEffect(() => {
        ref.current.volume = volume;
    }, [volume]);

    return (
        <AudioContext.Provider
            value={{
                playing,
                setSong,
                pause: ref.current.pause,
                play: ref.current.play,
                setVolume,
                volume,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

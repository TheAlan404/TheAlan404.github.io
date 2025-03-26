import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { MusicPlayerContext, Song } from "./MusicPlayerContext";
import { MUSIC_DATA } from "./data";
import { notifications } from "@mantine/notifications";

export const MusicPlayerProvider = ({
    children,
}: PropsWithChildren) => {
    const ref = useRef<HTMLAudioElement | null>(null);
    const audioContext = useRef<AudioContext | null>(null);
    const analyser = useRef<AnalyserNode | null>(null);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        let audio = new Audio();
        ref.current = audio;
        audio.loop = true // TODO;
        return () => {
            audioContext.current?.close();
            audio.pause();
            audio.remove();
            ref.current = null;
        };
    }, []);

    useEffect(() => {
        if(!ref.current) return;

        ref.current.onplaying = () => {
            notifications.hide("music");
        };
    }, [ref.current])

    const play = () => {
        ref.current?.play()
            .then(() => {
                audioContext.current = new AudioContext();
                let source = audioContext.current.createMediaElementSource(ref.current!);
                analyser.current = audioContext.current.createAnalyser();
                source.connect(analyser.current);
                source.connect(audioContext.current.destination);
            })
            .catch(e => {
                if(e instanceof DOMException && e.name == "NotAllowedError") {
                    notifications.show({
                        id: "music",
                        message: "Can't play music, please click anywhere",
                        autoClose: false,
                    });

                    const onClick = () => play();
                    window.addEventListener("click", onClick, { once: true });
                }
            })
    };

    useEffect(() => {
        if(!ref.current) return;
        
        ref.current.src = currentSong?.file || "";
        if(currentSong) play();
    }, [currentSong]);

    // useEffect(() => void setCurrentSong(MUSIC_DATA[0]), []);

    return (
        <MusicPlayerContext.Provider
            value={{
                ref,
                loading,
                playing,
                currentSong,
                analyser,
                audioContext,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};

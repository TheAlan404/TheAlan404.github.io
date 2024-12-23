import { useBackgroundAudio } from "@/src/utils/useBackgroundAudio";
import { clamp } from "@/src/utils/utils";
import { Image, Slider, Stack } from "@mantine/core";
import { useEffect, useMemo, useRef, useState } from "react";

export const Christmas = () => {
    let [date, setDate] = useState(Date.now());

    const startDate = new Date(2024, 11, 0).getTime();
    const endDate = new Date(2025, 0, 0).getTime();
    const dur = endDate - startDate;
    let progress = date - startDate;
    progress = progress / (dur * 4);
    progress = clamp(
        0,
        progress,
        0.25,
    );

    const ref = useRef(useMemo(() => new Audio("/assets/audio/events/mariah.ogg"), []));

    useEffect(() => {
        ref.current.loop = true;
        ref.current.volume = progress*4;
        ref.current.play()
            .catch(() => document.addEventListener("click", () => {
                ref.current.play();
            }, { once: true }));

        return () => {
            ref.current.pause();
        }
    }, [progress]);
    
    return (
        <Stack style={{
            position: "absolute",
            top: "0px",
        }}>
            <Image
                src="/assets/img/detail/mariah.png"
                h="10rem"
                style={{
                    opacity: progress,
                    filter: "saturate(4)",
                }}
            />
        </Stack>
    )
};

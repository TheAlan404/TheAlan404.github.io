import { useEffect, useMemo, useRef, useState } from "react";

export const relativeString = (d: Date) => {
    let formatter = new Intl.DateTimeFormat();
    const diff = -((new Date().getTime() - d.getTime())/1000)|0;
	const absDiff = Math.abs(diff);
    let f: { duration: number; unit: any };
	if (absDiff > 86400*30*10) {
		f = { duration: Math.round(diff/(86400*365)), unit: 'years' };
	} else if (absDiff > 86400*25) {
		f = { duration: Math.round(diff/(86400*30)), unit: 'months' };
	} else if (absDiff > 3600*21) {
		f = { duration: Math.round(diff/86400), unit: 'days' };
	} else if (absDiff > 60*44) {
		f = { duration: Math.round(diff/3600), unit: 'hours' };
	} else if (absDiff > 30) {
		f = { duration: Math.round(diff/60), unit: 'minutes' };
	} else {
        f = { duration: diff, unit: 'seconds' };
    }
    return f.duration + " " + f.unit;
};

export const useBeatdrop = ({
    audioSrc,
    beatDropOn,
    beatDropPosition,
    maxDelay = 1,
}: {
    beatDropOn: Date;
    beatDropPosition: number;
    audioSrc: string;
    maxDelay?: number;
}) => {
    const ref = useRef<HTMLAudioElement | null>(null);
    const [timer, setTimer] = useState("--:--:--");
    const [beatDidDrop, setBeatDidDrop] = useState(false);

    useEffect(() => {
        ref.current = new Audio(audioSrc);
    }, [audioSrc]);

    const startPlaybackOn = useMemo(() => (
        beatDropOn.getTime() - (beatDropPosition * 1000) - 1000
    ), [
        beatDropOn,
        beatDropPosition,
    ]);

    const update = () => {
        const date = new Date();
        let passed = date.getTime() > beatDropOn.getTime();
        setBeatDidDrop(passed);

        let diff = Math.round(Math.abs(date.getTime() - beatDropOn.getTime()) / 1000);

        const h = Math.floor((diff) / (60*60));
        const m = Math.floor(diff / 60) % 60;
        const s = diff % 60;

        // const rel = (diff > (60*60*24)) ? relativeString(beatDropOn) : "";

        setTimer([
            h ? h.toString().padStart(2, "0") : null,
            m.toString().padStart(2, "0"),
            s.toString().padStart(2, "0"),
        ].filter(x => x).join(":"));

        if(!ref.current) return;

        if(!passed
            && ref.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
            && startPlaybackOn < date.getTime()
        ) {
            let approxTime = (date.getTime() - startPlaybackOn) / 1000;

            if (ref.current.paused) {
                ref.current.play();
                ref.current.currentTime = approxTime;
            };
            
            let { currentTime } = ref.current;
            if(Math.abs(currentTime - approxTime) >= maxDelay) {
                ref.current.currentTime = approxTime;
            }
        }
    };

    useEffect(() => {
        update();
        let i = setInterval(update, 300);
        return () => {
            ref.current?.pause();
            clearInterval(i);
        };
    }, []);

    return {
        startPlaybackOn,
        isPlaying: !ref.current?.paused,
        beatDidDrop,
        timer,
    };
};

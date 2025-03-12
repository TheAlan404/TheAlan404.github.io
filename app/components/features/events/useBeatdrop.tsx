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
    const DEFAULT_VOLUME = 0.5;
    const ref = useRef<HTMLAudioElement | null>(null);
    const [timer, setTimer] = useState("--:--:--");
    const [beatDidDrop, setBeatDidDrop] = useState(new Date() > beatDropOn);
    const [volume, _setVolume] = useState(DEFAULT_VOLUME);
    const [err, setErr] = useState<any>(null);

    useEffect(() => {
        ref.current = new Audio(audioSrc);
        ref.current.volume = DEFAULT_VOLUME;
        _setVolume(ref.current.volume);
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

        setTimer([
            h.toString().padStart(2, "0"),
            (true) ? m.toString().padStart(2, "0") : null,
            (true) ? s.toString().padStart(2, "0") : s.toString(),
        ].filter(x => x).join(":"));

        if(!ref.current) return;

        if(!ref.current.paused) setErr(null);

        const endPlaybackOn = startPlaybackOn + ((ref.current.duration + 2)*1000);

        if(
            ref.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
            && startPlaybackOn < date.getTime()
            && endPlaybackOn > date.getTime()
        ) {
            let approxTime = (date.getTime() - startPlaybackOn) / 1000;

            try {
                if (ref.current.paused) {
                    ref.current.play()
                        .catch(e => {
                            console.log("play() error", e);
                            setErr(e);
                        });
                    ref.current.currentTime = approxTime;
                };

                let { currentTime } = ref.current;
                if(Math.abs(currentTime - approxTime) >= maxDelay) {
                    ref.current.currentTime = approxTime;
                }
            } catch(e: any) {
                console.log("setter currentTime error", e);
                setErr(e);
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

    const isPlaying = ref.current && !ref.current?.paused;

    return {
        startPlaybackOn,
        isPlaying,
        beatDidDrop,
        timer,
        volume,
        setVolume: (v: number) => {
            if(ref.current) ref.current.volume = v;
            _setVolume(v);
        },
        err,
    };
};

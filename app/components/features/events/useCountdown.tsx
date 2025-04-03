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

export const useCountdown = ({
    countdownTime,
    update: customUpdate,
}: {
    countdownTime: Date;
    update?: () => void;
}) => {
    const [timerText, setTimer] = useState("--:--:--:--");
    const [countdownReached, setCountdownReached] = useState(new Date() > countdownTime);

    const update = () => {
        const date = new Date();
        let passed = date.getTime() > countdownTime.getTime();
        setCountdownReached(passed);

        let diff = Math.round(Math.abs(date.getTime() - countdownTime.getTime()) / 1000);

        const d = Math.floor((diff) / (60*60*24));
        const h = Math.floor((diff) / (60*60)) % 24;
        const m = Math.floor(diff / 60) % 60;
        const s = diff % 60;

        setTimer([
            d,
            h,
            m,
            s
        ]
            // .filter(x => !!x)
            .map(x => x.toString().padStart(2, "0")).join(":"));

        customUpdate?.();
    };

    useEffect(() => {
        update();
        let i = setInterval(update, 300);
        return () => {
            clearInterval(i);
        };
    }, []);


    return {
        countdownReached,
        timerText,
    };
};

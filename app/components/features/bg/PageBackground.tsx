import { FarewellBackgroundEffect } from "./farewell/FarewellBackgroundEffect";
import { useEffects } from "./lib/useEffects";

export const PageBackground = () => {
    const { ref, store } = useEffects({
        effects: [
            [FarewellBackgroundEffect],
        ],
    });

    return (
        <div
            className="pageBackground"
        >
            <div id="rr1" style={{ position: "absolute", left: 0, bottom: 0 }} />
            <div id="rr2" style={{ position: "absolute", right: 0, bottom: 0 }} />
            <canvas
                className="pageBackground"
                style={{
                    width: `${100}vw`,
                    height: `${100}vh`,
                    imageRendering: "pixelated",
                }}
                ref={ref}
            />
        </div>
    );
};

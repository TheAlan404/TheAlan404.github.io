import { FarewellBackgroundEffect } from "./farewell/FarewellBackgroundEffect";
import { useEffects } from "./lib/useEffects";

export const PageBackground = () => {
    const { ref } = useEffects({
        effects: [
            [FarewellBackgroundEffect]
        ],
    });

    return (
        <canvas
            className="pageBackground"
            style={{
                width: `${100}vw`,
                height: `${100}vh`,
                imageRendering: "pixelated",
            }}
            ref={ref}
        />
    );
};

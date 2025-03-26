import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface Features {
    farewellBackground: boolean;
};

export const defaultFeatures = {
    farewellBackground: true,
} satisfies Features;

export type FeaturesControls = {
    enable: (name: keyof Features) => void;
    disable: (name: keyof Features) => void;
    toggle: (name: keyof Features) => void;
};

export const FeaturesContext = createContext<Features & FeaturesControls>({
    ...defaultFeatures,
    enable: () => { },
    disable: () => { },
    toggle: () => { },
});

export const FeaturesProvider = ({
    children,
}: PropsWithChildren) => {
    const [features, setFeatures] = useState<Features>(defaultFeatures);

    const enable = (k: keyof Features) =>
        setFeatures((x) => ({ ...x, [k]: true }));
    const disable = (k: keyof Features) =>
        setFeatures((x) => ({ ...x, [k]: false }));
    const toggle = (k: keyof Features) =>
        setFeatures((x) => ({ ...x, [k]: !x[k] }));

    return (
        <FeaturesContext.Provider
            value={{
                ...features,
                enable,
                disable,
                toggle,
            }}
        >
            {children}
        </FeaturesContext.Provider>
    );
};

export const useFeatures = () => useContext(FeaturesContext);

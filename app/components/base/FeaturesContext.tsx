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
};

export const FeaturesContext = createContext<Features & FeaturesControls>({
    ...defaultFeatures,
    enable: () => {},
    disable: () => {},
});

export const FeaturesProvider = ({
    children,
}: PropsWithChildren) => {
    const [features, setFeatures] = useState<Features>(defaultFeatures);
    
    const enable = (k: keyof Features) =>
        setFeatures((x) => ({ ...x, [k]: true }));
    const disable = (k: keyof Features) =>
        setFeatures((x) => ({ ...x, [k]: false }));

    return (
        <FeaturesContext.Provider
            value={{
                ...features,
                enable,
                disable,
            }}
        >

        </FeaturesContext.Provider>
    );
};

export const useFeatures = () => useContext(FeaturesContext);

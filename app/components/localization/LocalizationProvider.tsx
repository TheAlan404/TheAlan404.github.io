import { createContext, PropsWithChildren, useState } from "react";

export const SupportedLanguages = ["en", "tr"] as const;
export type SupportedLanguage = typeof SupportedLanguages[number];

export type ILocalizationContext = {
    language: SupportedLanguage;
    changeLanguage: (l: SupportedLanguage) => void;
};

export const LocalizationContext = createContext<ILocalizationContext>({
    language: "en",
    changeLanguage: () => {},
});

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
    const [language, changeLanguage] = useState<SupportedLanguage>("en");

    return (
        <LocalizationContext.Provider
            value={{
                language,
                changeLanguage,
            }}
        >
            {children}
        </LocalizationContext.Provider>
    );
};

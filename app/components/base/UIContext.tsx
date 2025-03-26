import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface UIState {
    musicPopout: boolean;
};

export const defaultUIState = {
    musicPopout: false,
} satisfies UIState;

export type UIControls = {
    enable: (name: keyof UIState) => void;
    disable: (name: keyof UIState) => void;
    toggle: (name: keyof UIState) => void;
};

export const UIContext = createContext<UIState & UIControls>({
    ...defaultUIState,
    enable: () => {},
    disable: () => {},
    toggle: () => {},
});

export const UIContextProvider = ({
    children,
}: PropsWithChildren) => {
    const [state, setUIState] = useState<UIState>(defaultUIState);
    
    const enable = (k: keyof UIState) =>
        setUIState((x) => ({ ...x, [k]: true }));
    const disable = (k: keyof UIState) =>
        setUIState((x) => ({ ...x, [k]: false }));
    const toggle = (k: keyof UIState) =>
        setUIState((x) => ({ ...x, [k]: !x[k] }));

    return (
        <UIContext.Provider
            value={{
                ...state,
                enable,
                disable,
                toggle,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

export const useUIState = () => useContext(UIContext);

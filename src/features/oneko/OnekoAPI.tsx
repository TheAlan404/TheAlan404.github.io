import { Coord } from "@/src/types";
import React, { useRef } from "react";
import { useState } from "react";

export interface OnekoBed {
    id: string;
    pos: Coord;
}

export interface OnekoAPI {
    beds: React.MutableRefObject<OnekoBed[]>;
    setBed: (id: string, coord: Coord) => void,
    removeBed: (id: string) => void;
}

export const OnekoContext = React.createContext<OnekoAPI>({
    beds: { current: [] },
    setBed: () => {},
    removeBed: () => {},
});

export const OnekoAPIProvider = ({
    children
}: React.PropsWithChildren) => {
    const beds = useRef<OnekoBed[]>([]);

    return (
        <OnekoContext.Provider
            value={{
                beds,
                setBed: (id, pos) => {
                    if (beds.current.find(x => x.id === id))
                        beds.current = beds.current.map(x => x.id === id ? { id, pos } : x)
                    else
                        beds.current.push({ id, pos });
                },
                removeBed: (id) => {
                    beds.current = beds.current.filter(x => x.id !== id);
                },
            }}
        >
            {children}
        </OnekoContext.Provider>
    )
}

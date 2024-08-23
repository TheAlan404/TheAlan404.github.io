import { Coord } from "@/src/types";
import React from "react";
import { useState } from "react";

export interface OnekoBed {
    id: string;
    pos: Coord;
}

export interface OnekoAPI {
    initial: Coord;
    setInitial: (c: Coord) => void,
    beds: OnekoBed[];
    setBed: (id: string, coord: Coord) => void,
}

export const OnekoContext = React.createContext<OnekoAPI>({
    initial: { x: 0, y: 0 },
    beds: [],
    setInitial: () => {},
    setBed: () => {},
});

export const OnekoAPIProvider = ({
    children
}: React.PropsWithChildren) => {
    const [initial, setInitial] = useState<Coord>({ x: 0, y: 0 });
    const [beds, setBeds] = useState<OnekoBed[]>([]);

    return (
        <OnekoContext.Provider
            value={{
                initial,
                setInitial,
                beds,
                setBed: (id, pos) => {
                    setBeds((li) => li.some(x => x.id == id) ? li.map(x => x.id == id ? ({ id, pos}) : x) : [...li, { id, pos }])
                },
            }}
        >
            {children}
        </OnekoContext.Provider>
    )
}

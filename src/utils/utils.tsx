import { Coord } from "../types";

export const randInt = (x = 1) => Math.round(Math.random() * x);
export const randFloat = (x = 1) => Math.random() * x;
export const choose = <T,>(a: T, b: T) => Math.random() > 0.5 ? a : b;
export const randArr = <T,>(x: T[]) => x[randInt(x.length-1)];
export const toRadians = (degrees: number) => degrees * (Math.PI/180);
export const clamp = (min: number, mid: number, max: number) => Math.min(Math.max(min, mid), max);
export const lerp = (a: number, b: number, amt: number) => a + (b - a) * amt;

export const eucDist = (a: number, b: number) => Math.sqrt(a ** 2 + b ** 2);

export const vecAdd = (a: Coord, b: Coord): Coord => ({
    x: a.x + b.x,
    y: a.y + b.y,
});

export const vecSub = (a: Coord, b: Coord): Coord => ({
    x: a.x - b.x,
    y: a.y - b.y,
});

export const vecMul = (a: Coord, b: Coord): Coord => ({
    x: a.x * b.x,
    y: a.y * b.y,
});

export const vecDiv = (a: Coord, b: Coord): Coord => ({
    x: a.x / b.x,
    y: a.y / b.y,
});

export const vec = (x: number, y: number): Coord => ({ x, y });

export const vecFloor = ({ x, y }: Coord): Coord => ({
    x: Math.floor(x),
    y: Math.floor(y),
});

export const vecIsZero = (v: Coord) => v.x == 0 && v.y == 0;
export const vecTup = (v: number): Coord => ({ x: v, y: v });

export const vecSafeNormalize = (v: Coord): Coord => vecIsZero(v) ? v : vecNormalize(v);

export const vecNormalize = (v: Coord): Coord => {
    let c = 1 / Math.sqrt(v.x * v.x + v.y * v.y);
    return vecMul(v, vecTup(c));
};

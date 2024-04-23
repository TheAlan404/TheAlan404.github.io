export const rand = (x = 1) => Math.floor(Math.random() * x);
export const randArr = <T,>(x: T[]) => x[rand(x.length)];
export const toRadians = (degrees: number) => degrees * (Math.PI/180);
export const clamp = (min: number, mid: number, max: number) => Math.min(Math.max(min, mid), max);

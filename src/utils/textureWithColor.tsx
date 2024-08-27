import { memoize, toRgba } from "@mantine/core";
import { useRef } from "react";

export const createTextureStore = (textures: string[]) => textures.map(src => {
    let img = new Image();
    img.src = src;
    return img;
});

export const useIsTextureStoreReady = (Textures: HTMLImageElement[]) => {
    const isReady = useRef(false);

    Promise.all(Textures.map(img => new Promise<void>(res => {
        if (img.complete) return res();
        img.onload = () => res();
    }))).then(() => {
        isReady.current = true;
    });

    return isReady;
};

export const textureWithColor = memoize((store: HTMLImageElement[], index: number, color: string) => {
    const texture = store[index];
    let { r, g, b } = toRgba(color);

    const offscreen = new OffscreenCanvas(texture.width, texture.height);
    const ctx = offscreen.getContext("2d");

    if(!ctx) return texture;

    ctx.drawImage(texture, 0, 0);

    const imageData = ctx.getImageData(0, 0, texture.width, texture.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 0] *= r/255;
        imageData.data[i + 1] *= g/255;
        imageData.data[i + 2] *= b/255;
    }

    ctx.putImageData(imageData, 0, 0);

    return offscreen;
});

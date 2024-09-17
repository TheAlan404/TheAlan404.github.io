import { memoize, toRgba } from "@mantine/core";
import { useRef } from "react";

export const createTextureStore = (textures: string[]) => textures.map(src => {
    let img = new Image();
    img.src = src;
    return img;
});

export const allImagesReady = (Textures: HTMLImageElement[]): Promise<void[]> => Promise.all(Textures.map(img => new Promise<void>(res => {
    if (img.complete) return res();
    img.onload = () => res();
})));

export const multiplyColor = (color: string, imageData: ImageData) => {
    let { r, g, b, a } = toRgba(color);
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 0] *= r/255;
        imageData.data[i + 1] *= g/255;
        imageData.data[i + 2] *= b/255;
        imageData.data[i + 3] *= a;
    }
};

export const textureWithColor = memoize((store: HTMLImageElement[], index: number, color: string) => {
    const texture = store[index];

    const offscreen = new OffscreenCanvas(texture.width, texture.height);
    const ctx = offscreen.getContext("2d");
    if(!ctx) return texture;

    ctx.drawImage(texture, 0, 0);
    const imageData = ctx.getImageData(0, 0, texture.width, texture.height);
    multiplyColor(color, imageData);
    ctx.putImageData(imageData, 0, 0);

    return offscreen;
});

export const textureWithColorDataURL = memoize((store: HTMLImageElement[], index: number, color: string, dl = false) => {
    const texture = store[index];

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if(!ctx) return texture.src;
    
    ctx.canvas.width = texture.width;
    ctx.canvas.height = texture.height;

    ctx.drawImage(texture, 0, 0);
    const imageData = ctx.getImageData(0, 0, texture.width, texture.height);
    multiplyColor(color, imageData);
    ctx.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
});

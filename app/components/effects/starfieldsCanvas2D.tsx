import { vec } from "@/src/utils/utils";
import { Star, STARFIELD_SCALE, StarfieldConfig } from "./starfields";
import { textureWithColor } from "@/src/utils/textureWithColor";

const mod = (x: number, m: number) => (x % m + m) % m;

export const renderStar = ({
    position,
    scroll,
    dim,
    color,
}: StarfieldConfig, star: Star, ctx: CanvasRenderingContext2D) => {
    let vector = vec(0, 0);
    vector.x = -64 + mod(Math.floor(star.Position.x - position.x * scroll.x), dim.width + 128);
    vector.y = -16 + mod(Math.floor(star.Position.y - position.y * scroll.y), dim.height + 32);
    let position2 = vector;

    let { x, y } = position2;
    let opacity = Math.round(star.Opacity * 255).toString(16).padStart(2, "0");
    let c = color + opacity;

    if(star.Texture == 0) {
        ctx.fillStyle = "#"+c;
        ctx.fillRect(x, y, 1, 1);
        return;
    } else if(star.Texture == 1) {
        ctx.fillStyle = "#"+c;
        ctx.fillRect(x+1, y, 1, 1);
        ctx.fillRect(x-1, y, 1, 1);
        ctx.fillRect(x, y+1, 1, 1);
        ctx.fillRect(x, y-1, 1, 1);
        return;
    }

    let tex = textureWithColor(
        "starfield",
        StarfieldTextures,
        star.Texture,
        c,
        STARFIELD_SCALE,
    );
    ctx.drawImage(
        tex,
        x*STARFIELD_SCALE - 8*STARFIELD_SCALE,
        y*STARFIELD_SCALE - 8*STARFIELD_SCALE,
    );
};

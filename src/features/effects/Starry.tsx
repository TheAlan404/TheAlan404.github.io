import { Coord } from "@/src/types";
import { useCanvas } from "@/src/utils/useCanvas";
import { choose, clamp, lerp, randFloat, randInt, vec, vecAdd, vecDiv, vecMul, vecSafeNormalize, vecSub, vecTup } from "@/src/utils/utils";

interface Star {
    tex: number;
    pos: Coord;
    opacity: number;
    NodeIndex: number;
    NodePercent: number;
    Distance: number;
    Sine: number;
}

export const StarryBackground = () => {
    const Textures: HTMLImageElement[] = Array(4).fill(0).map((_, i) => {
        let img = new Image();
        img.src = `/img/detail/starfield/0${i}.png`;
        return img;
    });

    const color = "";

    const stepSize = 32;
    const steps = 15;
    const minDist = 4;
    const maxDist = 24;
    let flowSpeed = 0.1;

    let YNodes: number[] = [];
    let Stars: Star[] = [];

    let num = Math.random() * 180;
    let num2 = 0;
    while (num2 < 15)
    {
        YNodes.push(num);
        num2++;
        num += choose(-1, 1) * (16 + randFloat(24));
    }

    for (let i = 0; i < 4; i++)
    {
        YNodes[YNodes.length - 1 - i] = lerp(
            YNodes[YNodes.length - 1 - i],
            YNodes[0],
            clamp(0, 1 - i / 4, 1)
        );
    }

    const getTargetOfStar = (star: Star): Coord => {
        let vector = vec(star.NodeIndex * 32, YNodes[star.NodeIndex]);
		let vector2 = vec((star.NodeIndex + 1) * 32, YNodes[star.NodeIndex + 1]);
		let vector3 = vecAdd(vector, vecMul(vecSub(vector2, vector), vecTup(star.NodePercent)));
		let vector4 = vecSafeNormalize(vecSub(vector2, vector));
		let vector5 = vec(0 - vector4.y, vector4.x);
		return vecAdd(vector3, vecMul(vector5, vecMul(vecTup(star.Distance), vecTup(Math.sin(star.Sine) * Math.PI))));
    };

    const createStar = (): Star => ({
        Distance: 0,
        NodeIndex: 0,
        NodePercent: 0,
        opacity: 0,
        pos: vec(0, 0),
        Sine: 0,
        tex: 0,
    });

    Stars = Array(128).fill(0).map((_, j) => {
        let num3 = randFloat();

        //int index = (int)Calc.Clamp(Ease.CubeIn(1f - num3) * (float)atlasSubtextures.Count, 0f, atlasSubtextures.Count - 1);

        let star: Star = {
            NodeIndex: randInt(YNodes.length-1),
            NodePercent: randFloat(),
            Distance: 4 + num3 * 20,
            Sine: randFloat(Math.PI * 2),
            opacity: num3 / 2,
            tex: randInt(Textures.length),
            pos: { x: 0, y: 0 },
        };

        star.pos = getTargetOfStar(star);

        return star;
    });

    let ref = useCanvas((ctx, dt) => {
        const updateStar = (star: Star, dt: number) => {
            star.Sine += dt * flowSpeed;
            star.NodePercent += dt * 0.25 * flowSpeed;
            if (star.NodePercent >= 1)
            {
                star.NodePercent -= 1;
                star.NodeIndex++;
                if (star.NodeIndex >= YNodes.length - 1)
                {
                    star.NodeIndex = 0;
                    star.pos.x -= ctx.canvas.width;
                }
            }
            star.pos = vecAdd(star.pos, vecMul(vecDiv(vecSub(getTargetOfStar(star), star.pos), vecTup(50)), vecTup(dt * 0.1)));
            return star;
        };
    
        const mod = (x: number, m: number) => {
            return (x % m + m) % m
        };

        const Update = () => {
            Stars = Stars.map(star => updateStar(star, dt));
        };
        
        const Render = () => {
            let position = vec(0, 0);
            let scroll = vec(0, 0);
            for(let star of Stars) {
                let vector = vec(0, 0);
                vector.x = -64 + mod(star.pos.x - position.x * scroll.x, ctx.canvas.width);
                vector.y = -16 + mod(star.pos.x - position.x * scroll.x, ctx.canvas.height);
                
                let position2 = vector;

                let img = Textures[star.tex];
                ctx.globalAlpha = star.opacity;
                ctx.drawImage(img, position2.x, position2.y);
            }
        };

        Update();
        Render();
    }, []);
    
    return (
        <canvas
            className="starry-canvas"
            ref={ref}
        />
    )
}

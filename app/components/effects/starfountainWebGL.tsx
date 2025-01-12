import { vec2, Vec2, vec2add, vec2div, vec2mul } from "@alan404/vec2";
import { clamp } from "@mantine/hooks";
import { lerp, randInt, randIntBetween } from "~/utils/math";
import { Star } from "./starfields";

const minDuration = 300;
const maxDuration = 1000;

export interface Starfountain {
    LastShootDirection: number;
};

const getCurrentAngle = (c: Starfountain) => {
    const x_velocity_random_variance = 60;
    const x_velocity_from_direction = 500;

    return c.LastShootDirection * x_velocity_from_direction
    /* * (1 - 2 * (Clock.CurrentTime - lastShootTime!.Value) / ShootDuration) */
    + randIntBetween(-x_velocity_random_variance, x_velocity_random_variance);
};

const createParticle = (c: Starfountain) => ({
    startPosition: vec2(0, 50),
    duration: randIntBetween(minDuration, maxDuration),
    startAngle: randIntBetween(-4, 4),
    endAngle: randIntBetween(-2, 2),
    endScale: 2.2 + randIntBetween(-0.4, 0.4),
    velocity: vec2(getCurrentAngle(c), -1400 + randIntBetween(-100, 100)),
} as FallingParticle);

export interface FallingParticle {
    startTime: number;
    startPosition: Vec2;
    velocity: Vec2;
    duration: number;
    startAngle: number;
    endAngle: number;
    endScale: number;
};

const compute = (t: number, p: FallingParticle) => {
    const progress = clamp(t / p.duration, 0, 1);
    const alpha = 1 - progress;
    const scale = lerp(1, p.endScale, progress);
    const angle = lerp(p.startAngle, p.endAngle, progress);
    const gravity = 800;
    const currentGravity = vec2(0, gravity * p.duration / maxDuration * progress);
    const position = vec2add(p.startPosition, vec2div(vec2mul(vec2add(p.velocity, currentGravity), t), maxDuration));

    return {
        Distance: 0,
        NodeIndex: 0,
        NodePercent: 0,
        Position: position,
        Opacity: alpha,
        Sine: 0,
        Texture: Math.floor(scale / 4),
    } as Star;
};

export class StarfountainWebGL {
    
    
    constructor() {

    }
};

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Coord } from "./Coord";
import { clamp, useWindowEvent } from "@mantine/hooks";
import { useSetInterval } from "../utils/useInterval";
import { randArr } from "../utils/utils";
import { Text, Tooltip } from "@mantine/core";
import { useContext } from "react";
import { OnekoContext } from "./OnekoAPI";

const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
    ],
    scratchWallN: [
        [0, 0],
        [0, -1],
    ],
    scratchWallS: [
        [-7, -1],
        [-6, -2],
    ],
    scratchWallE: [
        [-2, -2],
        [-2, -3],
    ],
    scratchWallW: [
        [-4, 0],
        [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
        [-2, 0],
        [-2, -1],
    ],
    N: [
        [-1, -2],
        [-1, -3],
    ],
    NE: [
        [0, -2],
        [0, -3],
    ],
    E: [
        [-3, 0],
        [-3, -1],
    ],
    SE: [
        [-5, -1],
        [-5, -2],
    ],
    S: [
        [-6, -3],
        [-7, -2],
    ],
    SW: [
        [-5, -3],
        [-6, -1],
    ],
    W: [
        [-4, -2],
        [-4, -3],
    ],
    NW: [
        [-1, 0],
        [-1, -1],
    ],
};

type SpriteName = keyof typeof spriteSets;

const getSprite = (name: SpriteName, frame: number) => spriteSets[name][frame % spriteSets[name].length];

type NekoState = "follow" | "grabbed" | "grabEnded" | "sit" | "sleep";

const nekoSpeed = 10;

const clampWindow = ({ x, y }: Coord) => ({
    x: clamp(
        16,
        x,
        window.innerWidth - 16,
    ),
    y: clamp(
        16,
        y,
        window.innerHeight - 16,
    ),
});

export const Oneko = () => {
    const { initial, beds } = useContext(OnekoContext);
    const [speak, setSpeak] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    let sayTimeoutRef = useRef<number | null>();
    const backgroundImage = "url(/img/cats/oneko-classic.gif)";

    const say = (s: string) => {
        setSpeak(s);
        if(sayTimeoutRef.current) clearTimeout(sayTimeoutRef.current);
        sayTimeoutRef.current = setTimeout(() => {
            setSpeak("");
            sayTimeoutRef.current = null;
        }, 1500);
    };

    useEffect(() => {
        if (!ref.current) return;
        if (!initial.x || !initial.y) return;

        let nekoPos: Coord = initial;
        let targetPos: Coord = initial;
        let nekoState: NekoState = "sleep";

        let frameCounter = 100;
        let idleTime = 0;
        let idleAnimation: SpriteName | null = null;

        const setSprite = (name: SpriteName, i?: number) => {
            const [x, y] = getSprite(name, i || frameCounter);
            if (!ref.current) return;
            ref.current.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
        }

        const setNekoPos = ({ x, y }: Coord) => {
            nekoPos = { x, y };
            ref.current!.style.left = `${x - 16}px`;
            ref.current!.style.top = `${y - 16}px`;
        };

        setSprite("sleeping");
        setNekoPos(nekoPos);

        const setNekoState = (state: NekoState) => {
            nekoState = state;
        };

        const setTargetPos = (coord: Coord) => {
            targetPos = coord;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (nekoState != "follow") return;

            setTargetPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const onWindowResize = () => {
            if (nekoState != "sit" && nekoState != "sleep") return;

            // If neko is outside the window and is forced to sleep, wake her up
            if (
                nekoPos.x - window.innerWidth > 32 ||
                nekoPos.y - window.innerHeight > 32 ||
                // Also when she is about to go outside the window
                targetPos.x - window.innerWidth > 32 ||
                targetPos.y - window.innerHeight > 32
            ) {
                setNekoState("follow");
            }
        };

        let lastScrollCache = {};
        const onWindowScroll = (e: Event) => {
            let el = e.target as HTMLDivElement;
            let rect = el.getBoundingClientRect();
            let oldScroll = lastScrollCache[el.id] || 0;
            let newScroll = el.scrollTop;
            lastScrollCache[el.id] = newScroll;
            let scrollDelta = oldScroll - newScroll;
            if(
                (rect.left < nekoPos.x && nekoPos.x < rect.right)
            ) {
                // kitty inside (tm)
                setNekoPos({
                    x: nekoPos.x,
                    y: nekoPos.y + scrollDelta,
                });
            }
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if(e.key != "n") return;

            e.preventDefault();

            setNekoState("sleep")
            setNekoPos(initial);
        };

        const onDoubleClick = () => {
            if(nekoState == "sit") {
                say(randArr([
                    "its following time!",
                    "mrow!",
                    "mice?!",
                ]));
                setNekoState("follow");
            } else if(nekoState == "follow") {
                say("oki i sit :3");
                setNekoState("sit");
            } else if(nekoState == "sleep") {
                say("*yawn* hiii");
                idleAnimation = null;
                setNekoState("follow");
                setSprite("tired");
            }
        };

        const onRightClick = (e: MouseEvent) => {
            e.preventDefault();
            if(nekoState == "sleep") {
                say(randArr([
                    "*purrr*",
                    "*car noise*",
                    "*happy kitten*",
                    "*purrrrrrrr*",
                ]));
            } else {
                say(randArr([
                    "meoww",
                    "mrow~!",
                    "i love pets :3",
                    "nya~",
                ]));
            }
        };

        const onMouseDown = (e: MouseEvent) => {
            if (e.button !== 0) return;
            e.preventDefault();

            let beforeState = nekoState;
            setNekoState("grabbed");
            let dragStart: Coord = {
                x: e.clientX,
                y: e.clientY,
            };
            let nekoStart = nekoPos;

            const mousemove = (e: MouseEvent) => {
                const deltaX = e.clientX - dragStart.x;
                const deltaY = e.clientY - dragStart.y;
                const absDeltaX = Math.abs(deltaX);
                const absDeltaY = Math.abs(deltaY);

                // Scratch in the opposite direction of the drag
                if (absDeltaX > absDeltaY && absDeltaX > 10) {
                    setSprite(deltaX > 0 ? "scratchWallW" : "scratchWallE");
                } else if (absDeltaY > absDeltaX && absDeltaY > 10) {
                    setSprite(deltaY > 0 ? "scratchWallN" : "scratchWallS");
                }

                setNekoPos(clampWindow({
                    x: nekoStart.x + e.clientX - dragStart.x,
                    y: nekoStart.y + e.clientY - dragStart.y,
                }));

                if (
                    absDeltaX > 10 ||
                    absDeltaY > 10 ||
                    Math.sqrt(deltaX ** 2 + deltaY ** 2) > 10
                ) {
                    dragStart = {
                        x: e.clientX,
                        y: e.clientY,
                    };
                    nekoStart = nekoPos;
                }
            };

            const mouseup = () => {
                setTargetPos(nekoPos);
                setNekoState(beforeState);
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
            };

            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);
        };

        const getIdleAnimations = (): SpriteName[] => {
            return [
                "idle",
                "scratchSelf",
                (nekoPos.x < 32) && "scratchWallW",
                (nekoPos.y < 32) && "scratchWallN",
                (nekoPos.x > window.innerWidth - 32) && "scratchWallE",
                (nekoPos.y > window.innerHeight - 32) && "scratchWallS",
            ].filter(x => typeof x == "string") as SpriteName[];
        };

        const idle = () => {
            idleTime += 1;

            // every ~ 20 seconds
            if (
                idleTime > 10 &&
                idleAnimation == null
            ) {
                idleAnimation = randArr(getIdleAnimations());
                frameCounter = 0;
            }

            if ((!idleAnimation || idleAnimation == "idle") && idleTime > 100) {
                setNekoState("sleep");
                frameCounter = 0;
            }

            if(nekoState == "sleep") {
                idleAnimation = "sleeping";
            }

            if (idleAnimation?.startsWith("scratch")) {
                setSprite(idleAnimation);
                if(idleAnimation == "scratchSelf" && frameCounter > 10) {
                    idleAnimation = null;
                }
            } else if (idleAnimation == "sleeping") {
                if (frameCounter < 24) {
                    say("eepy...");
                    setSprite("tired");
                    return;
                }
                setSprite("sleeping", Math.floor(frameCounter / 4));
                if (frameCounter > 192 && nekoState !== "sleep") {
                    frameCounter = 0;
                }
            } else {
                setSprite("idle");
            }
        };

        const interval = setInterval(() => {
            frameCounter += 1;

            if (nekoState == "grabbed") return;
            if (nekoState == "grabEnded") return setSprite("alert");
            if (nekoState == "sit") return idle();

            const diff: Coord = {
                x: nekoPos.x - targetPos.x,
                y: nekoPos.y - targetPos.y,
            };

            const distance = Math.sqrt(diff.x ** 2 + diff.y ** 2);

            // snapping to target
            if (
                nekoState == "sleep" &&
                Math.abs(diff.y) < nekoSpeed &&
                Math.abs(diff.x) < nekoSpeed
            ) {
                setNekoPos(targetPos);
            }

            if (nekoState == "sleep") return idle();

            if ((distance < nekoSpeed || distance < 48) && nekoState == "follow") {
                idle();
                return;
            }

            if (idleTime > 1) {
                setSprite("alert");
                // count down after being alerted before moving
                idleTime = Math.min(idleTime, 7);
                idleTime -= 1;
                return;
            }

            let direction = diff.y / distance > 0.5 ? "N" : "";
            direction += diff.y / distance < -0.5 ? "S" : "";
            direction += diff.x / distance > 0.5 ? "W" : "";
            direction += diff.x / distance < -0.5 ? "E" : "";
            if (direction) setSprite(direction as SpriteName);

            idleAnimation = null;

            setNekoPos({
                x: nekoPos.x - (diff.x / distance) * nekoSpeed,
                y: nekoPos.y - (diff.y / distance) * nekoSpeed,
            });
        }, 100);

        say("(double click)");

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
        window.addEventListener("keydown", onKeyDown);
        let scrollAreas = document.querySelectorAll(".mantine-ScrollArea-viewport");
        scrollAreas.forEach((e) => e.addEventListener("scroll", onWindowScroll));
        ref.current.addEventListener("dblclick", onDoubleClick);
        ref.current.addEventListener("mousedown", onMouseDown);
        ref.current.addEventListener("contextmenu", onRightClick);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onWindowResize);
            window.removeEventListener("keydown", onKeyDown);
            scrollAreas.forEach((e) => e.removeEventListener("scroll", onWindowScroll));
            ref.current?.removeEventListener("dblclick", onDoubleClick);
            ref.current?.removeEventListener("mousedown", onMouseDown);
            ref.current?.removeEventListener("contextmenu", onRightClick);
            clearInterval(interval);
        };
    }, [ref.current, initial, beds]);

    return (
        <Tooltip
            label={(
                <Text fz={10}>
                    {speak}
                </Text>
            )}
            disabled={!speak}
            opened={!!speak}
            withArrow
        >
            <div
                id="oneko"
                ref={ref}
                style={{
                    opacity: (!initial.x || !initial.y) ? "0" : "1",
                    width: "32px",
                    height: "32px",
                    position: "fixed",
                    backgroundImage,
                    imageRendering: "pixelated",
                    overflow: "hidden",
                    zIndex: 900,
                }}
            />
        </Tooltip>
    )
}

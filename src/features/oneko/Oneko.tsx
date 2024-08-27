import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { clamp, useWindowEvent } from "@mantine/hooks";
import { Text, Tooltip } from "@mantine/core";
import { useContext } from "react";
import { OnekoContext } from "./OnekoAPI";
import { randInt, randArr, eucDist } from "../../utils/utils";
import { Coord } from "@/src/types";
import { Enum, match } from "@alan404/enum";

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

type NekoStatus = Enum<{
    untouched: {};
    sleeping: {};
    idle: {};
    sit: {};
    follow: {
        target: Coord;
        afterTargetReached?: "sleep" | "sit";
    };
    dragging: {
        previousState: NekoStatus;
        startPosition: Coord;
        direction?: "N" | "S" | "E" | "W";
    };
}> & {
    position: Coord;
};

const nekoSpeed = 10;

const coord = ({ clientX, clientY }: { clientX: number; clientY: number }) => ({
    x: clientX,
    y: clientY,
});

export const Oneko = () => {
    const { initial, beds } = useContext(OnekoContext);
    const [speak, setSpeak] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    let sayTimeoutRef = useRef<number | null>();
    const backgroundImage = "url(/assets/img/cats/oneko-classic.gif)";

    const say = (s: string, keep = false) => {
        setSpeak(s);
        if (sayTimeoutRef.current) clearTimeout(sayTimeoutRef.current);
        if (keep) return;
        sayTimeoutRef.current = setTimeout(() => {
            setSpeak("");
            sayTimeoutRef.current = null;
        }, 1500);
    };

    useEffect(() => {
        if (!ref.current) return;
        if (!initial.x || !initial.y) return;

        let initialNekoState: NekoStatus = {
            type: "untouched",
            data: {},
            position: initial,
        };

        let neko: NekoStatus = initialNekoState;

        const NekoMinFollowDistance = 48;

        let setNekoState = (state: NekoStatus) => {
            neko = state;
        };

        // Events

        const onNekoInputDown = (initial: Coord) => {
            setNekoState({
                ...neko,
                type: "dragging",
                data: {
                    previousState: neko,
                    startPosition: initial,
                },
            });
        }

        const onInputUp = () => {
            if (neko.type == "dragging") {
                setNekoState({
                    ...neko.data.previousState,
                    position: neko.position,
                });
            }
        }

        const onInputMove = (target: Coord) => {
            if(neko.type == "dragging") {
                let distFromStart = Math.sqrt(
                    (target.x - neko.data.startPosition.x) ** 2 + (target.y - neko.data.startPosition.y) ** 2
                );

                const delta: Coord = {
                    x: target.x - neko.position.x,
                    y: target.y - neko.position.y,
                };
                
                const absDelta: Coord = {
                    x: Math.abs(delta.x),
                    y: Math.abs(delta.y),
                };

                // Scratch in the opposite direction of the drag
                let dir;
                if (absDelta.x > absDelta.y) {
                    dir = delta.x > 0 ? "W" : "E";
                } else if (absDelta.y > absDelta.x) {
                    dir = delta.y > 0 ? "N" : "S";
                }

                setNekoPos(target);

                if (neko.data.direction || distFromStart > 32) {
                    if (dir) setNekoState({ ...neko, data: { ...neko.data, direction: dir } });
                }

                return;
            }

            if ((["untouched", "sleeping", "sit"] as NekoStatus["type"][]).includes(neko.type)) return;

            if(eucDist(neko.position.x - target.x, neko.position.y - target.y) < NekoMinFollowDistance) return;

            setNekoState({
                ...neko,
                type: "follow",
                data: {
                    target,
                },
            });
        }

        const onWindowResize = () => {
            if ((["follow"] as NekoStatus["type"][]).includes(neko.type)) return;

            // If neko is outside the window and is forced to sleep, wake her up
            if (
                neko.position.x - window.innerWidth > 32 ||
                neko.position.y - window.innerHeight > 32
            ) {
                setNekoState({
                    ...neko,
                    type: "idle",
                });
            }
        };

        const onNekoDoubleClick = () => {
            const wakeUp = () => {
                setNekoState({ ...neko, type: "idle", data: {} });

                say("*yawn* car activated owo");
            };

            const sitDown = () => {
                setNekoState({ ...neko, type: "sit", data: {} });

                say("oki i sit :3");
            };

            const sitUp = () => {
                setNekoState({ ...neko, type: "idle", data: {} });

                say(randArr([
                    "its following time!",
                    "mrow!",
                    "mice?!",
                ]));
            };

            match(neko)({
                sit: () => sitUp(),
                follow: () => sitDown(),
                idle: () => sitDown(),
                sleeping: () => wakeUp(),
                untouched: () => wakeUp(),
                _: () => {},
            });
        };

        const onNekoRightClick = (e: MouseEvent) => {
            e.preventDefault();
            new Audio(`/assets/audio/meows/sophia/${randInt(3)}.mp3`).play();
            say(randArr([
                "meoww",
                "mrow~!",
                "i love pets :3",
                "nya~",
                "mrrow",
                "mrrp~",
                "miuw",
                "mm yes pets uwu",
                "miau :3",
            ]));
        };

        // Wrapper event handlers

        const onMouseMove = (e: MouseEvent) => onInputMove(coord(e));
        const onNekoMouseUp = (e: MouseEvent) => onInputUp();
        const onNekoTouchMove = (e: TouchEvent) => e.touches.length == 1 && onInputMove(coord(e.touches[0]));
        const onNekoTouchEnd = (e: TouchEvent) => {
            if(e.touches.length !== 1) return;
            onInputMove(coord(e.touches[0]));
            onInputUp();
        };

        const onNekoMouseDown = (e: MouseEvent) => {
            if (e.button !== 0) return;
            e.preventDefault();
            onNekoInputDown(coord(e));
        };

        const onNekoTouchStart = (e: TouchEvent) => {
            if (e.touches.length !== 1) return;
            onTouchStartDblClick(e);
            e.preventDefault();
            onNekoInputDown(coord(e.touches[0]));
        };
        
        // https://stackoverflow.com/questions/45804917/dblclick-doesnt-work-on-touch-devices
        // TODO: rewrite
        let expired;
        const onTouchStartDblClick = (e: TouchEvent) => {
            if (e.touches.length !== 1) return;
            if (!expired) {
                expired = e.timeStamp + 400
            } else if (e.timeStamp <= expired) {
                // remove the default of this event ( Zoom )
                e.preventDefault()
                onNekoDoubleClick()
                // then reset the variable for other "double Touches" event
                expired = null
            } else {
                // if the second touch was expired, make it as it's the first
                expired = e.timeStamp + 400
            }
        };
        
        // Render

        let positionTopOffset = 0;
        const setNekoPos = ({ x, y }: Coord) => {
            neko.position = { x, y };
            ref.current!.style.left = `${x - 16}px`;
            ref.current!.style.top = `${y - positionTopOffset - 16}px`;
        };

        const onScroll = (e: Event) => {
            let el = e.currentTarget as HTMLElement;
            positionTopOffset = el.scrollTop;
            setNekoPos(neko.position);
        };

        // Update

        let frame = 0;
        const update = () => {
            frame++;

            const setSprite = (name: SpriteName) => {
                const [x, y] = getSprite(name, name == "sleeping" ? Math.floor(frame/8) : frame);
                if (!ref.current) return;
                ref.current.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
            }

            match(neko)({
                dragging: ({ direction }) => direction && setSprite("scratchWall"+direction as SpriteName),
                
                untouched: () => setSprite("sleeping"),
                sleeping: () => setSprite("sleeping"),

                idle: () => setSprite("idle"),
                sit: () => setSprite("idle"),
                
                follow: ({ target }) => {
                    const diff: Coord = {
                        x: neko.position.x - target.x,
                        y: neko.position.y - target.y,
                    };
        
                    const distance = Math.sqrt(diff.x ** 2 + diff.y ** 2);

                    if(distance < NekoMinFollowDistance) {
                        setNekoState({ ...neko, type: "idle", data: {} });
                        return;
                    }

                    let direction = diff.y / distance > 0.5 ? "N" : "";
                    direction += diff.y / distance < -0.5 ? "S" : "";
                    direction += diff.x / distance > 0.5 ? "W" : "";
                    direction += diff.x / distance < -0.5 ? "E" : "";
                    if (direction) setSprite(direction as SpriteName);

                    neko.position.x -= (diff.x / distance) * nekoSpeed;
                    neko.position.y -= (diff.y / distance) * nekoSpeed;
                },

                _: () => {},
            });

            setNekoPos(neko.position);
        };

        // Loop

        let i = setInterval(() => update(), 100);



        

        

        

        const getIdleAnimations = (): SpriteName[] => {
            return [
                "idle",
                "scratchSelf",
                (neko.position.x < 32) && "scratchWallW",
                (neko.position.y < 32) && "scratchWallN",
                (neko.position.x > window.innerWidth - 32) && "scratchWallE",
                (neko.position.y > window.innerHeight - 32) && "scratchWallS",
            ].filter(x => typeof x == "string") as SpriteName[];
        };

        /* const idle = () => {
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

            if (nekoState == "sleep") {
                idleAnimation = "sleeping";
            }

            if (idleAnimation?.startsWith("scratch")) {
                setSprite(idleAnimation);
                if (idleAnimation == "scratchSelf" && frameCounter > 10) {
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
        }; */

            // snapping to target
           /*  if (
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
            } */

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
        ref.current.addEventListener("touchmove", onNekoTouchMove);
        ref.current.addEventListener("touchstart", onNekoTouchStart);
        ref.current.addEventListener("touchend", onNekoTouchEnd);
        ref.current.addEventListener("dblclick", onNekoDoubleClick);
        ref.current.addEventListener("mousedown", onNekoMouseDown);
        ref.current.addEventListener("mouseup", onNekoMouseUp);
        ref.current.addEventListener("contextmenu", onNekoRightClick);

        let scroller = document.querySelector(".mantine-ScrollArea-viewport") as HTMLElement | null;
        scroller?.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onWindowResize);
            ref.current?.removeEventListener("touchmove", onNekoTouchMove);
            ref.current?.removeEventListener("touchstart", onNekoTouchStart);
            ref.current?.removeEventListener("touchend", onNekoTouchEnd);
            ref.current?.removeEventListener("dblclick", onNekoDoubleClick);
            ref.current?.removeEventListener("mousedown", onNekoMouseDown);
            ref.current?.removeEventListener("contextmenu", onNekoRightClick);
            scroller?.removeEventListener("scroll", onScroll);
            clearInterval(i);
        };
    }, [ref.current]);

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

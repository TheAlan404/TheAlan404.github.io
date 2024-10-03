import { Decor } from "@/src/components/misc/Decor";
import { Project } from "@/src/types";

export const ProjectDecorations = ({ p }: { p: Project }) => {
    return (
        <>
            {p.name == "NekoTube" && (
                <Decor
                    img="jumping.gif"
                    style={{
                        position: "absolute",
                        top: "-73px",
                        right: "0px",
                        width: "4em",
                    }}
                />
            )}
        </>
    );
};

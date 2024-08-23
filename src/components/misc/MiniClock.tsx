import { Code } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";

export const MiniClock = () => {
    let [text, setText] = useState("");

    useEffect(() => {
        let i = setInterval(() => {
            let d = new Date();
            let h = d.getHours().toString().padStart(2, "0");
            let m = d.getMinutes().toString().padStart(2, "0");
            let s = d.getSeconds().toString().padStart(2, "0");
            setText([h, m, s].join(":"));
        }, 750);

        return () => clearInterval(i);
    }, []);

    return (
        <Code bg="dark.8">
            {text}
        </Code>
    )
}

import { Text } from "@mantine/core";
import { useMemo } from "react";
import { randArr } from "~/utils/math";

export const SplashText = () => {
    const data = [
        "events website up!",
        "now with splash texts",
        "i hope your day's going well!",
        // "stop looking at the splash texts. bruh.",
        "projects now have descriptions!",
    ];

    const splash = useMemo(() => randArr(data), []);

    return (
        <Text c="dimmed">
            {splash}
        </Text>
    )
};

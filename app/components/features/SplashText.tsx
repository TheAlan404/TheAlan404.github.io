import { Text } from "@mantine/core";
import { randArr } from "~/utils/math";

export const SplashText = () => {
    const data = [
        "events website up!",
        "now with splash texts",
        "i hope your day's going well!",
        // "stop looking at the splash texts. bruh.",
        
    ];

    const splash = randArr(data);

    return (
        <Text c="dimmed">
            {splash}
        </Text>
    )
};

import { useState } from "react";
import { Eggs } from "../assets/eggs";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";
import { rand } from "../utils/utils";

export const EasterEgg = () => {
    let [egg, setEgg] = useState(rand(Eggs.length));

    let EggComponent = Eggs[egg];

    return (
        <Group>
            <Text>
                <EggComponent />
            </Text>
            <ActionIcon
                onClick={() => {
                    setEgg((e) => {
                        while(true) {
                            let n = rand(Eggs.length);
                            if(n !== e) return n;
                        }
                    })
                }}
                color="gray"
                variant="outline"
                size="sm"
            >
                <IconReload size={16} />
            </ActionIcon>
        </Group>
    )
}

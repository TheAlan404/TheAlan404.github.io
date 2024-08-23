import { useState } from "react";
import { Eggs } from "../../assets/eggs";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";
import { randInt } from "../../utils/utils";

export const EasterEgg = () => {
    let [egg, setEgg] = useState(randInt(Eggs.length));

    let EggComponent = Eggs[egg];

    return (
        <Group justify="center">
            <Text>
                <EggComponent />
            </Text>
            <ActionIcon
                onClick={() => {
                    setEgg((e) => {
                        while(true) {
                            let n = randInt(Eggs.length);
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

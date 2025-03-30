import { Box, Divider, Group, Stack, Table, Text } from "@mantine/core";
import { IconBrandWindows, IconCpu, IconCpu2, IconDeviceSim, TablerIcon } from "@tabler/icons-react";

export const Specs = () => {
    return (
        <Stack align="center" w="100%">
            <Divider
                label="neofetch"
                w="80%"
            />

            <Box ff="monospace">
                <Table
                    withRowBorders={false}
                    verticalSpacing={0}
                    data={{
                        body: ([
                            [IconCpu, "CPU", "Intel Core i5 M480 @ 2.67GHz"],
                            [IconDeviceSim, "RAM", "4 GB DDR3"],
                            [IconCpu2, "GPU", "NVIDIA GeForce GT 420M"],
                            [IconBrandWindows, "OS", "Windows 10"],
                        ] as [TablerIcon, string, string][]).map(([Icon, key, value]) => ([
                            [
                                <Group wrap="nowrap" gap={4}>
                                    <Icon size={18} />
                                    <Text fw="bold">{key}</Text>
                                </Group>,
                                <Text>{value}</Text>,
                            ]
                        ])).flat()
                    }}
                />
            </Box>
        </Stack>
    );
};

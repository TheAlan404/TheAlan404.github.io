import { OnekoBed } from "@/src/features/oneko/OnekoBed"
import { Group, Stack, Text } from "@mantine/core"

export const OnekoSection = () => {
    return (
        <Group align="center">
            <Stack w="32px" h="32px" justify="center">
                <OnekoBed id="initial" />
            </Stack>
            <Stack gap={0} ta="start">
                <Text c="dimmed">← double click</Text>
                <Text c="dimmed" fz="xs">(custom implementation)</Text>
            </Stack>
        </Group>
    )
}

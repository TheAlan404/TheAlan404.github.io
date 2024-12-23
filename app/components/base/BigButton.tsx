import { Group, Stack, Title, Text, Image, Transition } from '@mantine/core';
import { useTranslation } from "react-i18next";

export const BigButton = ({
    withHint = true,
    onClick,
}: {
    withHint?: boolean;
    onClick?: () => void;
}) => {
    const [t] = useTranslation();

    return (
        <Stack
            align="center"
            justify="center"
            gap={0}
            style={{ zIndex: 2 }}
        >
            <Stack
                className="bigButtonContainer"
                align="center"
                gap="xs"
            >
                <Transition
                    mounted={withHint}
                    transition="fade-up"
                >
                    {(s) => (
                        <Text style={s} c="dimmed">{t("header.hint")}</Text>
                    )}
                </Transition>

                <Group
                    wrap="nowrap"
                    align="center"
                    justify="center"
                    className="bigButton"
                    p="sm"
                    px="lg"
                    gap="xs"
                    onClick={onClick}
                >
                    <Image
                        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2728.png"
                        h="1.5rem"
                        w="1.5rem"
                    />
                    <Title order={3}>
                        deniz.blue
                    </Title>
                    <Image
                        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f338.png"
                        h="1.5rem"
                        w="1.5rem"
                    />
                </Group>
            </Stack>
        </Stack>
    )
}

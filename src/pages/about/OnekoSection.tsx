import { OnekoBed } from "@/src/features/oneko/OnekoBed"
import { Group, Stack, Text } from "@mantine/core"
import { useTranslation } from "react-i18next"

export const OnekoSection = () => {
    const { t, i18n: { resolvedLanguage } } = useTranslation();

    return (
        <Group align="center">
            <Stack w="32px" h="32px" justify="center">
                <OnekoBed id="initial" offset={{
                    x: 12,
                    y: 0,
                }} key={resolvedLanguage} />
            </Stack>
            <Stack gap={0} ta="start">
                <Text c="dimmed">← {t("oneko.doubleClick")}</Text>
                <Text c="dimmed" fz="xs">{t("oneko.customImpl")}</Text>
            </Stack>
        </Group>
    )
}

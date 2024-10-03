import { IconApps } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Divider, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { FriendKuylar } from "../../../components/friends/kuylar";
import { FriendSkyrina } from "../../../components/friends/skyrina";
import { FriendInftord } from "../../../components/friends/inftord";
import { FriendLiliana } from "../../../components/friends/liliana";
import { FriendAthenya } from "../../../components/friends/ath";
import { FriendAshley } from "../../../components/friends/ashley";
import { FriendSophia } from "@/src/components/friends/sophia";
import { Section } from "@/src/components/misc/Section";
import { FriendSparkles } from "@/src/components/friends/sparkles";
import { useTranslation } from "react-i18next";

export const Other = () => {
    const [t] = useTranslation();

    return (
        <AboutSection
            value="other"
            title={t("other.title")}
            icon={<IconApps />}
        >
            <Stack>
                <Section>
                    <Stack>
                        <Divider
                            w="100%"
                            labelPosition="left"
                            label={t("other.friendsTitle")}
                        />

                        <SimpleGrid cols={{
                            base: 3,
                            sm: 4,
                        }} spacing="sm" w="100%">
                            {[
                                <FriendKuylar />,
                                <FriendSkyrina />,
                                <FriendInftord />,
                                <FriendLiliana />,
                                <FriendAthenya />,
                                <FriendAshley />,
                                <FriendSophia />,
                                <FriendSparkles />,
                            ].map((el, i) => (
                                <Paper
                                    key={i}
                                    withBorder
                                    style={{
                                        aspectRatio: "1/1",
                                        overflow: "hidden",
                                    }}
                                >
                                    {el}
                                </Paper>
                            ))}
                        </SimpleGrid>

                        <Text>
                            {t("other.bruh")}
                        </Text>
                    </Stack>
                </Section>

                <Section>
                    <Stack>
                        <Divider
                            w="100%"
                            labelPosition="left"
                            label={"88x31"}
                        />

                        <Text c="dimmed">todo!()</Text>
                    </Stack>
                </Section>
            </Stack>
        </AboutSection>
    )
}

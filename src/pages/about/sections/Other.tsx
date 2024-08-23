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

export const Other = () => {
    return (
        <AboutSection
            value="other"
            title="Other"
            icon={<IconApps />}
        >
            <Stack>
                <Paper p="sm" >
                    <Stack>
                        <Divider
                            w="100%"
                            labelPosition="left"
                            label={"Friends' Websites"}
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
                            these are supposed to be custom elements made by them but uhhh
                        </Text>
                    </Stack>
                </Paper>

                <Paper p="sm">
                    <Stack>
                        <Divider
                            w="100%"
                            labelPosition="left"
                            label={"88x31"}
                        />

                        <Text c="dimmed">todo!()</Text>
                    </Stack>
                </Paper>
            </Stack>
        </AboutSection>
    )
}

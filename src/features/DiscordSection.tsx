import { Group, Image, Text } from "@mantine/core";
import { useFetch } from "@mantine/hooks";
import { Link } from "../components/Link";
import { IconBrandDiscord } from "@tabler/icons-react";
import { useEffect } from "react";

const GUILD_ID = "1197520507617153064";
const API_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;
export const DiscordSection = () => {
    const {
        data,
        loading,
        refetch,
    } = useFetch<{ presence_count: number; instant_invite: string; }>(API_URL, {
        autoInvoke: true,
    });

    useEffect(() => {
        let i = setInterval(() => refetch(), 60 * 1000);

        return () => clearInterval(i);
    }, []);

    return (
        <Group justify="space-between" w="100%">
            <Image
                src="/img/cats/emir.gif"
                draggable={false}
                w="3em"
            />
            <Group>
                <Text c="dimmed">
                    {data && `${data.presence_count} online`}
                </Text>
                <Link
                    text="Join My Discord!"
                    loading={loading}
                    url={data?.instant_invite}
                    icon={<IconBrandDiscord />}
                    variant="light"
                />
            </Group>
        </Group>
    );
};

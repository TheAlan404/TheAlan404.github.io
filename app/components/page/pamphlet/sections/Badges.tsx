import { Box, Divider, Group, SimpleGrid, Stack, Table, Text } from "@mantine/core";

export const ButtonsSection = () => {
    return (
        <Stack align="center" w="100%">
            <Divider
                label="Buttons!"
                w="80%"
            />

            <Stack gap={4}>
                <Badges />

                <Group justify="start" ta="start" c="dimmed" gap={4}>
                    <Text fz="xs">I need more. Give. me. more. 88x31's!!</Text>
                </Group>
            </Stack>
        </Stack>
    )
};

export const Badges = () => {
    return (
        <SimpleGrid cols={3} spacing={4} className="badges-container">
            <Badge src="https://split.pet/88x31/split.png" />
            <Badge src="https://dimden.dev/services/images/88x31.gif" />
            <Badge src="https://vea.st/button.png" />
            <Badge src="https://such.blue/res/button.png" />
            <Badge src="https://maia.crimew.gay/badges/maia.crimew.gay.png" />
            <Badge src="https://oat.zone/badges/oatzone.gif" />
            <Badge src="https://oat.zone/badges/krisbtn.png" href={null} />
            <Badge src="https://badge.les.bi/88x31/pan/trans/75-degree/outset.svg" />
            <iframe
                src="https://incr.easrng.net/badge?key=deniz.blue"
                style={{ background: "url(https://incr.easrng.net/bg.gif)", border: "unset" }}
                title="increment badge"
                width="88"
                height="31"
            />
            <Badge src="https://oat.zone/badges/tidalwave.gif" href={null} />
            <Badge src="https://s.mew.gay/88x31/crouton.gif" href="https://crouton.net" />
            <Badge src="https://ruby.gay/88x31/gif.gif" />
            <Badge src="https://badges.easrng.net/easrng.gif" href="https://easrng.net" />
            <Badge src="https://lily.pet/assets/badges/lily_pet.gif" />
            <Badge src="https://zptr.cc/88x31/webring/zeroptr.png" />
            <Badge src="https://palaiologos.rocks/static/8831/-1.gif" href={null} />
            {/* <iframe
                src="/badge"
                style={{ border: "unset" }}
                title="deniz.blue"
                width="88"
                height="31"
            /> */}
        </SimpleGrid>
    )
};

export const Badge = ({
    src,
    href,
    title,
}: {
    src: string;
    title?: string;
    href?: string | null;
}) => {
    const { hostname, origin } = new URL(src);

    let img = (
        <img
            src={src}
            title={href ? hostname : undefined}
            loading="lazy"
        />
    );

    if (href === null) return img;

    return (
        <a
            href={href || origin}
            target="_blank"
        >
            {img}
        </a>
    );
};

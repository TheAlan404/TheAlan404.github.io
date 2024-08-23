import { Box, Code, Group, Image, Loader, Text, Tooltip } from "@mantine/core";
import { ImageWithLoader } from "../components/misc/ImageWithLoader";
import { Link } from "../components/misc/Link";

export const Eggs: React.FC[] = [
    () => (
        <Text span component="a" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
            dQw4w9WgXcQ
        </Text>
    ),
    ...[
        "dafrina",
        "ispik",
        "ada",
    ].map((qt) => (
        () => (
            <Group>
                <Tooltip
                    withArrow
                    events={{ hover: true, focus: false, touch: true }}
                    label={(
                        <ImageWithLoader
                            src={`/img/cuties/${qt}.png`}
                            w="5em"
                            h="5em"
                            fallbackSrc="https://placehold.co/200x200?text=loading%20cutie"
                        />
                    )}
                >
                    <Text span c="white">{qt}</Text>
                </Tooltip>
                <Text
                    span
                    variant="gradient"
                    gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                    fw={900}
                >
                    {"<3"}
                </Text>
            </Group>
        )
    )),
    () => (
        <Group>
            <Text span>try running</Text>
            <Code onClick={() => {
                // @ts-ignore
                world.execute(me);
            }} style={{ cursor: "pointer" }}>
                world.execute(me);
            </Code>
            <Text span>on the console</Text>
        </Group>
    ),
    () => (
        <Code>
            {'{love && hate && <Relationship with="webDev" />}'}
        </Code>
    ),
    () => (
        <Text span>
            rain sounds "borrowed" from <Link text="dimden.dev" url="https://dimden.dev" size="compact-xs" />
        </Text>
    ),
];

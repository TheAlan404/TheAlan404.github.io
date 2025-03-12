import { Box, Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { Project } from "~/types";
import { SubtleLink } from "../ui/SubtleLink";
import { Link } from "react-router";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export const ProjectCard = ({
    value,
}: {
    value: Project;
}) => {
    return (
        <Paper
            withBorder
            className="card dimmedBg grow frost"
            style={{
                "--bg": value.primaryImage ? `url(${value.primaryImage})` : "",
                "--dim": "0.7",
            }}
            p="xs"
        >
            <Stack h="100%" justify="space-between" gap={"sm"}>
                <Stack>
                    <Stack gap={0}>
                        <Group wrap="nowrap" align="start">
                            <Group flex="1">
                                <SubtleLink
                                    to={`/projects/${value.id}`}
                                >
                                    <Title lineClamp={2} order={4}>
                                        {value?.name}
                                    </Title>
                                </SubtleLink>

                                {/* <VisibilityInline value={value?.visibility} /> */}
                            </Group>

                            <Group gap="xs" wrap="nowrap">
                                {/* <EventTimeframeInline event={value} /> */}

                                {/* {value?.id && (
                                    <EventCardMenu
                                        disabled={type !== "view"}
                                        event={value}
                                    />
                                )} */}
                            </Group>
                        </Group>

                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            {value?.shortDesc}
                        </Text>
                    </Stack>

                    <Stack gap={0}>
                        {/* <EventInstancesList instances={value?.instances || []} />

                        <PricingsList pricings={value?.pricings || []} />

                        {value?.ageRestricted && (
                            <TextWithIcon
                                icon={(
                                    <IconAlertTriangle
                                        color="var(--mantine-color-yellow-text)"
                                    />
                                )}
                                label="Sadece 18+"
                            />
                        )} */}
                    </Stack>
                </Stack>

                <Stack gap={"xs"}>
                    {/* <EventOrganizersInline value={value?.organizers || []} /> */}

                    <Group justify="space-between" wrap="nowrap" gap={4}>
                        <Box />

                        <Group gap="xs" wrap="nowrap" justify="end">
                            <Button
                                color="gray"
                                variant="light"
                                size="compact-sm"
                                component={Link}
                                to={`/projects/${value.id}`}
                                rightSection={<IconArrowNarrowRight />}
                            >
                                More
                            </Button>
                        </Group>
                    </Group>
                </Stack>
            </Stack>
        </Paper>
    );
};

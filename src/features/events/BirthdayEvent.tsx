import { Section } from "@/src/components/misc/Section";
import { Collapse, Stack, Text, Title } from "@mantine/core";
import { relativeString, useBeatdrop } from "./useBeatdrop";

/*

YOU WILL BE SPOILED

do not read contents of the message

please

*/

export const BirthdayEvent = () => {
    const {
        beatDidDrop,
        startPlaybackOn,
        timer,
    } = useBeatdrop({
        audioSrc: "/assets/audio/events/Opus.mp4",
        beatDropOn: new Date(2024, 10, 3, 0, 0),
        beatDropPosition: 3*60 + 43,
    });

    return (
        <Stack h="100vh" justify="center">
            <Section ta="center">
                <Title>
                    {timer}
                </Title>

                {startPlaybackOn > Date.now() && (
                    <Text>
                        Suprise: {relativeString(new Date(startPlaybackOn))}
                    </Text>
                )}

                {startPlaybackOn < Date.now() && !beatDidDrop && (
                    <Text>
                        Now playing: Opus by Eric Prydz
                    </Text>
                )}

                <Collapse in={startPlaybackOn < Date.now() && beatDidDrop}>
                    <Text>
                        I'm now 19!
                        <br />
                        <br />
                        Thank you for listening in to my silly beat drop count down thingy.
                        I want to dedicate this section to my friends and everyone I love.
                        To Deniz, Kardelen, Emek, Amy, Nazlı, Miraç, Kuylar, Sylvia, Cosmo,
                        Tina, River, Kiwi Aslı, Nokia, Takip, Sophia, Armağan,
                        Multiple Emir's, Güz, tway&, Cyan, Candaş, Skyrina, Hannah, Azra,
                        Ekin, Bulut, Irmak, Anna, Kartal, Neptune... okay this is getting out of hand.
                        I'm sorry if your name isnt here, im not good at remembering people ;w;
                        I LOVE YOU GUYS thanks for always being with me ilysm
                        <br />
                        <br />
                        On another note, there will be an event that I will be organizing sometime soon;
                        a hybrid IRL (Istanbul) and Online (Discord) event! If you dont already,
                        follow me on my instagram for updates (or discord maybe idk) -- this event
                        is only for my friends etc though
                    </Text>
                </Collapse>
            </Section>
        </Stack>
    )
};

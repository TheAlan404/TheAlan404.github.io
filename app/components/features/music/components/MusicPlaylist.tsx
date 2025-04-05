import { Stack } from "@mantine/core"
import { MUSIC_DATA } from "../data"
import { MusicPlaylistItem } from "./MusicPlaylistItem"

export const MusicPlaylist = () => {
    return (
        <Stack gap={4}>
            {MUSIC_DATA.map((song, i) => (
                <MusicPlaylistItem song={song} key={i} />
            ))}
        </Stack>
    )
}

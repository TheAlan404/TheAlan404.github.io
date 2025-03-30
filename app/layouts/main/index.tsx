import { Affix, Box, Stack } from "@mantine/core";
import { Outlet, useLocation } from "react-router";
import { PopoutContent } from "~/layouts/main/PopoutContent";
import { PageButtons } from "./PageButtons";
import { PagePopout } from "./PagePopout";
import { Pamphlet } from "~/components/page/pamphlet/Pamphlet";

export default function Layout() {
    const location = useLocation();

    return (
        <Box>
            <Affix position={{
                bottom: 16,
                left: 16,
            }}>
                <Stack ta="start" align="start">
                    <PageButtons />
                </Stack>
            </Affix>

            <PagePopout opened={location.pathname.length > 1}>
                <PopoutContent>
                    <Outlet />
                </PopoutContent>
            </PagePopout>

            <Box className="pamphlet_container">
                {!(location.pathname.length > 1) && <Pamphlet />}
            </Box>
        </Box>
    )
};





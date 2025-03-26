import { Box, Group, ScrollArea } from "@mantine/core";
import { PropsWithChildren, Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";

export const PopoutContent = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const ref= useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(
            ref.current) ref.current.scrollTop = 0;
    }, [location.pathname]);
    
    return (
        <Group gap={0} wrap="nowrap" h="100%">
            <Box h="100%" w="100%">
                <ScrollArea.Autosize mah={"100%"} h="100%" w="100%" scrollbars={"y"} viewportRef={ref}>
                    <Box p="sm" h="100%">
                        <Suspense fallback={"Loading..."}>
                            {children}
                        </Suspense>
                    </Box>
                </ScrollArea.Autosize>
            </Box>
        </Group>
    );
};

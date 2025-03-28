import { Outlet } from "react-router";
import { FeaturesProvider } from "~/components/base/FeaturesContext";
import { UIContextProvider } from "~/components/base/UIContext";
import { PageBackground } from "~/components/features/bg/PageBackground";
import { MusicPlayerProvider } from "~/components/features/music/MusicPlayerProvider";

export default function Layout() {
    return (
        <FeaturesProvider>
            <UIContextProvider>
                <MusicPlayerProvider>
                    <PageBackground />
                    <Outlet />
                </MusicPlayerProvider>
            </UIContextProvider>
        </FeaturesProvider>
    )
};

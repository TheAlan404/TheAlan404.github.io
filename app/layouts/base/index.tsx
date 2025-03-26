import { Outlet } from "react-router";
import { FeaturesProvider } from "~/components/base/FeaturesContext";
import { UIContextProvider } from "~/components/base/UIContext";
import { MusicPlayerProvider } from "~/components/features/music/MusicPlayerProvider";

export default function Layout() {
    return (
        <FeaturesProvider>
            <UIContextProvider>
                <MusicPlayerProvider>
                    <Outlet />
                </MusicPlayerProvider>
            </UIContextProvider>
        </FeaturesProvider>
    )
};

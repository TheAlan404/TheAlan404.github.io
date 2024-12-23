import { Config } from "@react-router/dev/config";
import { navItems } from "~/navItems";
import { NavItem } from "~/types";

export default {
    ssr: false,
    async prerender() {
        return [
            '/',
            '/projects',
            '/projects/events',
            '/projects/alphamath',
            '/projects/carpanga',
            '/projects/discord-jsx',
            '/projects/istanbus',
            '/projects/minecraft-assets',
            '/projects/nbt-ts',
            '/projects/nekotube',
            '/projects/polycules',
            '/projects/react-workspace',
            '/projects/ziltek',
            '/projects/mcman',
            '/projects/oaalmun',
            '/projects/denvis',
            '/projects/paginated-selects',
            '/projects/want-you-gone',
            '/projects/nbs-js',
            '/art',
            '/blog',
            '/blog/hello'
        ];
    }
} satisfies Config;

import { SimpleGrid } from "@mantine/core";

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
                style={{ background: "url(//incr.easrng.net/bg.gif)", border: "unset" }}
                title="increment badge"
                width="88"
                height="31"
            />
            <Badge src="https://oat.zone/badges/tidalwave.gif" href={null} />
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
        />
    );

    if(href === null) return img;

    return (
        <a
            href={href || origin}
            target="_blank"
        >
            {img}
        </a>
    );
};

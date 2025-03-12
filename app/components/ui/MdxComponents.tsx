import { Alert, Group, Stack, Text } from "@mantine/core";
import { ImageWithLoader } from "./ImageWithLoader";
import { CodeHighlight, InlineCodeHighlight } from "@mantine/code-highlight";
import { Link } from "react-router";

export const MdxComponents = {
    p: Text,
    a: (props: any) => <Link {...props} to={props.href} target={props.href.startsWith("/") ? undefined : "_blank"} />,
    code: (props: any) => {
        return (
            props.className ? (
                <CodeHighlight
                    code={props.children}
                    language={props.className.split("-")[1]}
                />
            ) : (
                <InlineCodeHighlight
                    code={props.children}
                />
            )
        )
    },
    img: ImageWithLoader,
    Alert,
    Group,
    Stack,
} as const;

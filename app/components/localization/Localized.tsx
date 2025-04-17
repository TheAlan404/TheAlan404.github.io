import { Fragment, ReactNode, useContext } from "react";
import { LocalizationContext, SupportedLanguage } from "./LocalizationProvider";
import { Text } from "@mantine/core";

export type LocalizedStringsMap = {
    [language in SupportedLanguage]: string;
};

export type ReactNodesMap = Partial<Record<string, ReactNode>>;

export type LocalizedProps = LocalizedStringsMap & ReactNodesMap & {
    asText?: boolean;
    inline?: boolean;
};

export const LocalizedString = (props: LocalizedStringsMap) => {
    const { language } = useContext(LocalizationContext);

    return props[language];
};

export const Localized = (props: LocalizedProps) => {
    const { language } = useContext(LocalizationContext);

    const string = props[language];
    const list = string.split(/(#\w+#)/);

    const elements = list.map((value, i) => {
        if (value[0] == "#" && value[value.length - 1] == "#") {
            const key = value.substring(1, value.length - 1);
            return (
                <Fragment
                    key={i}
                    children={props[key]}
                />
            );
        } else {
            return !props.asText ? value : (
                <Text inline={props.inline} inherit span key={i}>
                    {value}
                </Text>
            );
        }
    });

    return (
        <Fragment>
            {elements}
        </Fragment>
    );
};

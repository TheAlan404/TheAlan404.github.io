import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DEFAULT_THEME, MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { WeatherProvider } from "./features/effects/Weather";
import { OnekoAPIProvider } from "./features/oneko/OnekoAPI";
import { Effects } from "./features/effects/Effects";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import 'mantine-flagpack/styles.css';
import '@mantine/code-highlight/styles.css';
import './style.css';
import './mixins.css';
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";

const theme = createTheme({
    fontFamily: "Lexend-VariableFont, " + DEFAULT_THEME.fontFamily,
    primaryColor: "violet",
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
        ],
    },
    components: {
        Tooltip: {
            defaultProps: {
                color: "dark",
            },
            styles: {
                color: "var(--mantine-color-text)"
            }
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <MantineProvider theme={theme} forceColorScheme="dark">
        <Notifications />
        <I18nextProvider i18n={i18next} defaultNS={"translation"}>
            <WeatherProvider>
                <OnekoAPIProvider>
                    <App />
                </OnekoAPIProvider>
            </WeatherProvider>
        </I18nextProvider>
    </MantineProvider>
);

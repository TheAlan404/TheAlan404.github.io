import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DEFAULT_THEME, MantineProvider, createTheme } from '@mantine/core';
import { WeatherProvider, WeatherRenderer } from "./features/effects/Weather";
import { Oneko } from "./features/oneko/Oneko";
import { OnekoAPIProvider } from "./features/oneko/OnekoAPI";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './style.css';
import { StarryBackground } from "./features/effects/StarryBackground";
import { ParallaxMist } from "./features/effects/ParallaxMist";

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
    <MantineProvider theme={theme} defaultColorScheme='dark'>
        <WeatherProvider>
            <OnekoAPIProvider>
                <ParallaxMist />
                <StarryBackground />
                <App />
            </OnekoAPIProvider>
        </WeatherProvider>
    </MantineProvider>
);

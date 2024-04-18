import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import './style.css';
import { WeatherRenderer } from "./features/Weather";

const theme = createTheme({
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
        <App />
        <WeatherRenderer />
    </MantineProvider>
);

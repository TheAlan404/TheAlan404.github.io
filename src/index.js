import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider defaultColorScheme='dark'>
        <App />
    </MantineProvider>
);

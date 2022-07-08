import { createMuiTheme } from '@mui/material';
import { ThemeProvider as Provider } from '@mui/system';
import React from 'react';
interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#5f2d8f',
                contrastText: '#fff',
            },
            secondary: {
                main: '#ff9900',
                contrastText: '#fff',
            },
        },
    });
    return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;

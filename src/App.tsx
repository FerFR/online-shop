import React from 'react';
import './styles/global.css';
import Routes from './Routes';
import ThemeProvider from './provider/ThemeProvider';
import QueryProvider from './provider/QueryProvider';
import StoreProvider from './provider/StoreProvider';

const App = () => {
    return (
        <StoreProvider>
            <QueryProvider>
                <ThemeProvider>
                    <Routes />
                </ThemeProvider>
            </QueryProvider>
        </StoreProvider>
    );
};

export default App;

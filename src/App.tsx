import React from 'react';
import './styles/global.css';
import Routes from './Routes';
import ThemeProvider from './provider/ThemeProvider';

const App = () => {
    return (
        <>
            <ThemeProvider>
                <Routes />
            </ThemeProvider>
        </>
    );
};

export default App;

import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout = (Component: any) => {
    return () => {
        return (
            <>
                <Header />
                <Component />
                <Footer />
            </>
        );
    };
};

export default Layout;

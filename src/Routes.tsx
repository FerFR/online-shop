import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from 'react-router-dom';

import Account from './pages/Account';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import Search from './pages/Search';
import Login from './pages/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/buscar" element={<Search />} />
                <Route path="/produto/:id" element={<Product />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/minha-conta" element={<Account />} />
                <Route path="/entrar" element={<Login />} />
            </Switch>
        </Router>
    );
};

export default Routes;

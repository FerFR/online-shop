import React from 'react';

import styled from '@emotion/styled';
import SortIcon from '@mui/icons-material/Sort';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import SearchContainer from './SearchContainer';
import Link from '../../shared/Link';
import useToggle from '../../hooks/useToggle';
import MenuModal from './MenuModal';
import CartModal from './CartModal';
import useUpdate from '../../hooks/useUpdate';
import useBodyScroll from '../../hooks/useBodyScroll';
import HeaderDesktop from './HeaderDesktop';
import { useLocation } from 'react-router-dom';

const Sticky = styled.div`
    position: sticky;
    top: 0;
    z-index: 5;
`;

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    box-shadow: 1px 1px 5px #ccc;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;
    width: 100%;
    background-color: var(--main-color);
    color: var(--text-secondary-color);
`;

const MenuButton = styled.button``;
const Logo = styled.img`
    width: 110px;
`;
const CartButton = styled.button``;
const Mobile = styled.div`
    @media (min-width: 800px) {
        display: none;
    }
`;
const Desktop = styled.div`
    display: none;
    @media (min-width: 800px) {
        display: block;
    }
`;

const Header = () => {
    const [menu, toggleMenu] = useToggle<boolean, boolean>(false, true);
    const [cart, toggleCart] = useToggle<boolean, boolean>(false, true);
    const [enableScroll, disableScroll] = useBodyScroll();
    const location = useLocation();
    useUpdate(() => {
        if (cart || menu) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [cart, menu]);
    useUpdate(() => {
        enableScroll();
    }, [location.pathname]);

    return (
        <Sticky>
            <Mobile>
                <Container>
                    <Top>
                        <MenuButton onClick={toggleMenu}>
                            <SortIcon />
                        </MenuButton>
                        <Link to="/">
                            <Logo src="/images/logo.webp" />
                        </Link>
                        <CartButton onClick={toggleCart}>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </CartButton>
                    </Top>
                    <SearchContainer />
                </Container>
                <MenuModal open={menu} toggle={toggleMenu} />
            </Mobile>
            <CartModal open={cart} toggle={toggleCart} />
            <Desktop>
                <HeaderDesktop toggleCart={toggleCart} />
            </Desktop>
        </Sticky>
    );
};

export default Header;

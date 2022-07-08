import styled from '@emotion/styled';
import React from 'react';
import Link from '../../shared/Link';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
const Container = styled.header`
    width: 100%;
    background-color: var(--main-color);
    box-shadow: 1px 1px 4px #eee;
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Top = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Bottom = styled.div`
    width: 100%;
    background-color: #fff;
`;
const Logo = styled.img`
    width: 180px;
`;
const Inline = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px 0;

    a {
        font-weight: 500;
    }
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    border-radius: 16px;
`;
const Input = styled.input`
    width: 90%;
    padding: 8px 14px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
`;
const SearchButton = styled.button`
    width: 10%;
    color: #fff;
    border: 2.2px solid #fff;
    height: 100%;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
`;

const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: white;
    width: 125px;
`;

const User = styled.div`
    border: 2px solid #fff;
    background-color: var(--main-color);
    padding: 2px 4px;
    border-radius: 50%;
`;
const Text = styled.span`
    font-size: 13px;
`;
const CartButton = styled.button`
    color: white;
`;
interface Props {
    toggleCart: () => void;
}

const HeaderDesktop = ({ toggleCart }: Props) => {
    return (
        <Container>
            <Content>
                <div className="content">
                    <Top>
                        <Link to="/">
                            <Logo src="/images/logo.webp" />
                        </Link>
                        <Search>
                            <Input placeholder="O que você procura?" />
                            <SearchButton>
                                <SearchIcon />
                            </SearchButton>
                        </Search>
                        <Link to="/minha-conta">
                            <Login>
                                <User>
                                    <PersonIcon />
                                </User>
                                <Text>Entre ou cadastre-se</Text>
                            </Login>
                        </Link>
                        <CartButton onClick={toggleCart}>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </CartButton>
                    </Top>
                </div>
                <Bottom>
                    <div className="content">
                        <Inline>
                            <Link to="#">Home</Link>
                            <Link to="#">Loja</Link>
                            <Link to="#">Airdots</Link>
                            <Link to="#">Apple Watch</Link>
                            <Link to="#">Smart Watch</Link>
                            <Link to="#">Fones de Ouvido</Link>
                            <Link to="#">Sobre</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Contato</Link>
                        </Inline>
                    </div>
                </Bottom>
            </Content>
        </Container>
    );
};

export default HeaderDesktop;

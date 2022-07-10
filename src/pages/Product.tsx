import React from 'react';
import Layout from '../hoc/Layout';
import styled from '@emotion/styled';
import ProductImages from '../components/Product/ProductImages';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Container = styled.div`
    padding: 10px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`;
const Title = styled.h2``;
const Price = styled.h2`
    color: var(--main-color);
`;
const Inline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
const Input = styled.input`
    width: 60px;
    font-size: 17px;
    font-weight: bold;
    padding: 5px 15px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #eee;
`;
const Button = styled.button`
    background-color: var(--main-color);
    color: white;
    padding: 2px 20px;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
`;

const Product = () => {
    return (
        <Container>
            <ProductImages />
            <Title>
                Xiaomi Redmi Airdots S Airdots 2 Fone Bluetooth (cópia)
            </Title>
            <Price>R$200,00</Price>
            <Inline>
                <Input type="number" defaultValue="1" />
                <Button>
                    <ShoppingBasketIcon />
                    Comprar
                </Button>
            </Inline>
        </Container>
    );
};

export default Layout(Product);

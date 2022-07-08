import React from 'react';
import styled from '@emotion/styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Container = styled.div`
    width: min(100%, 256px);
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 12px;
`;
const Image = styled.img``;
const Name = styled.span`
    font-size: 12px;
`;
const Price = styled.span`
    font-weight: 500;
    color: var(--main-color);
`;
const Button = styled.button`
    background-color: var(--main-color);
    color: var(--text-secondary-color);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: min(100%, 170px);
    padding: 4px 0;
    border-radius: 4px;

    svg {
        font-size: 20px;
    }
`;

const ProductCard = () => {
    return (
        <Container>
            <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/H1647dc028f144ecab95f907a6a6dfbe2K.jpg_960x960-300x300.jpg" />
            <Name>
                SQR P18 Smart Watch Feminino 1.6 Inch 2021 Full Touch (cópia)
            </Name>
            <Price>R$250,00</Price>
            <Button>
                <ShoppingBasketIcon />
                Comprar
            </Button>
        </Container>
    );
};

export default ProductCard;

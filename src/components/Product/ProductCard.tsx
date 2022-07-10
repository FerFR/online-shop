import React from 'react';
import styled from '@emotion/styled';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from '../../shared/Link';

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

interface Props {
    id: number;
    title: string;
    image: string;
    price: string;
}

const ProductCard = ({ id, title, image, price }: Props) => {
    return (
        <Container>
            <Link to={'/produto/' + id}>
                <Image src={image} />
            </Link>
            <Name>{title}</Name>
            <Price>{price}</Price>
            <Button>
                <ShoppingBasketIcon />
                Comprar
            </Button>
        </Container>
    );
};

export default ProductCard;

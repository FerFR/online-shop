import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
    border: 1px solid #eee;
`;
const Image = styled.img`
    width: 100px;
    padding: 10px;
`;
const Center = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
`;
const Name = styled.p`
    font-size: 12px;
`;
const Price = styled.span``;
const Quantity = styled.span``;
const Bottom = styled.div`
    font-weight: bold;
    font-size: 14px;
`;
const Right = styled.div``;
const ButtomDelete = styled.button`
    background-color: var(--background-color);
    height: 30px;
    border-radius: 50%;
    margin-top: auto;
    font-size: 10px;
`;

const CartItem = () => {
    return (
        <Container>
            <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/Hed47ddd58b1c4e4c8922bfc62b285d9as.jpg_960x960-300x300.jpg" />
            <Center>
                <Name>
                    SQR P18 Smart Watch Feminino 1.6 Inch 2021 Full Touch
                    (cópia) - Cinza
                </Name>
                <Bottom>
                    <Quantity>4</Quantity> x <Price>R$250,00</Price>
                </Bottom>
            </Center>
            <ButtomDelete>
                <CloseIcon />
            </ButtomDelete>
        </Container>
    );
};

export default CartItem;

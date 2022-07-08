import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 60px;
`;
const Card = styled.div`
    background-color: var(--main-color);
    color: var(--text-secondary-color);
    padding: 15px;
    border-radius: 8px;
    width: min(42%, 230px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    text-align: center;
    min-height: 160px;
`;
const Image = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;
const Text = styled.span`
    font-size: 13px;
`;

const Info = () => {
    return (
        <Container>
            <Card>
                <Image src="/images/truck.png" />
                <Text>Frete Grátis para todo o Brasil</Text>
            </Card>
            <Card>
                <Image src="/images/card.png" />
                <Text>Parcele sua compra até 12x</Text>
            </Card>
            <Card>
                <Image src="/images/shield.png" />
                <Text>Compra segura seus dados protegidos</Text>
            </Card>
            <Card>
                <Image src="/images/location.png" />
                <Text>Pedido monitorado com código de rastreio</Text>
            </Card>
        </Container>
    );
};

export default Info;

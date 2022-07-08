import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (min-width: 800px) {
        margin-bottom: 120px;
    }
`;
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background-color: #fff;
    border-bottom: 0px solid var(--main-color);
    border: 1px solid #eee;
    border-radius: 4px;
    width: min(40%, 250px);
    padding: 10px;
    height: 130px;
    text-align: center;
    transition: 50ms;
    :hover {
        border-bottom: 2px solid var(--main-color);
    }
`;
const Image = styled.img`
    width: 50px;
`;
const Text = styled.span``;

const Category = () => {
    return (
        <Container>
            <Card>
                <Image src="/images/airpods.webp" />
                <Text>Airdots</Text>
            </Card>
            <Card>
                <Image src="/images/fones-de-ouvido.webp" />
                <Text>Fones de Ouvido</Text>
            </Card>
            <Card>
                <Image src="/images/watch.webp" />
                <Text>Smart Watch</Text>
            </Card>
            <Card>
                <Image src="/images/watch2.webp" />
                <Text>Apple Watch</Text>
            </Card>
        </Container>
    );
};

export default Category;

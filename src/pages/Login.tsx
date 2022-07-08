import React from 'react';
import Layout from '../hoc/Layout';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 120px auto;
    width: min(80%, 300px);
    background-color: #fff;
    border: 1px solid #eee;
    padding: 30px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 4px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const Button = styled.button`
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-radius: 4px;
    font-weight: 500;
    padding: 4px;
`;
const Image = styled.img`
    width: 30px;
`;

const Login = () => {
    return (
        <Container>
            <Title>Entrar</Title>
            <Button>
                <Image src="/images/google.webp" /> Entrar com Google
            </Button>
            <Button>
                <Image src="/images/github.png" /> Entrar com Github
            </Button>
        </Container>
    );
};

export default Layout(Login);

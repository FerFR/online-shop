import React from 'react';
import Layout from '../hoc/Layout';
import Carousel from '../components/Carousel/Carousel';
import styled from '@emotion/styled';
import Category from '../components/Category/Category';
import Products from '../components/Product/Products';

const Container = styled.div`
    margin: 60px 0;
`;

const Title = styled.h2`
    text-align: center;
    margin: 30px 0;
`;
const ImageSection = styled.img`
    padding: 0 10px;
    border-radius: 30px;
    width: 100%;
    margin: 40px 0;
    @media (min-width: 800px) {
        display: none;
    }
`;
const ImageSectionDesktop = styled.img`
    display: none;
    padding: 0 10px;
    border-radius: 30px;
    width: 100%;
    margin: 120px 0;
    @media (min-width: 800px) {
        display: block;
    }
`;

const Home = () => {
    return (
        <>
            <Carousel />
            <div className="content">
                <Container>
                    <Title>Categorias</Title>
                    <Category />
                    <Title>Lançamentos</Title>
                    <Products />
                    <ImageSection src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-10-online-shop.png" />
                    <ImageSectionDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-10.png" />
                    <Title>Destaques</Title>
                    <Products />
                </Container>
            </div>
        </>
    );
};

export default Layout(Home);

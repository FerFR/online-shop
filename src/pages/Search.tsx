import styled from '@emotion/styled';
import React from 'react';
import Layout from '../hoc/Layout';
import Filters from '../components/Filters/Filters';
import ProductSearch from '../components/Product/ProductSearch';

const Container = styled.div`
    width: 100%;
`;
const Content = styled.div`
    width: 100%;
    @media (min-width: 800px) {
        gap: 30px;
        display: flex;
        align-items: flex-start;
    }
`;
const Image = styled.img`
    @media (min-width: 800px) {
        display: none;
    }
`;
const ImageDesktop = styled.img`
    display: none;
    height: 500px;
    object-fit: cover;
    @media (min-width: 800px) {
        display: block;
    }
`;

const Search = () => {
    return (
        <Container>
            <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-10-online-shop.png" />
            <ImageDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-10.png" />
            <div className="content">
                <Content>
                    <Filters />
                    <ProductSearch />
                </Content>
            </div>
        </Container>
    );
};

export default Layout(Search);

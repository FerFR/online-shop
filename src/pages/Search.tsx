import styled from '@emotion/styled';
import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import Filters from '../components/Filters/Filters';
import ProductSearch from '../components/Product/ProductSearch';
import { useQuery } from 'react-query';
import { searchQuery } from '../queries';
import useUpdate from '../hooks/useUpdate';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productSlice';
import { useSearchParams } from 'react-router-dom';

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
    const [searchParams] = useSearchParams();
    const [params, setParamas] = useState({
        search: searchParams.get('q'),
    });
    const [pagination, setPagination] = React.useState({
        page: 1,
        limit: 12,
    });

    const dispatch = useDispatch();
    const { data, isLoading, isError } = useQuery(
        ['search', { ...params, ...pagination }],
        searchQuery
    );

    useUpdate(() => {
        if (!isError) {
            dispatch(setProducts(data));
        }
    }, [isLoading]);
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

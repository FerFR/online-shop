import React from 'react';
import styled from '@emotion/styled';
import ProductCard from './ProductCard';
import Pagination from '@mui/material/Pagination';
import Grid from '../../shared/Grid';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 30px 0;
    width: min(100%, 800px);
`;

const ProductSearch = () => {
    return (
        <Container>
            <Grid>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Grid>
            <Pagination count={5} variant="outlined" shape="rounded" />
        </Container>
    );
};

export default ProductSearch;

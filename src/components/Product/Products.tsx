import React from 'react';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';
import Grid from '../../shared/Grid';

const Products = () => {
    return (
        <Grid>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Grid>
    );
};

export default Products;

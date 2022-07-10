import React from 'react';
import styled from '@emotion/styled';
import ProductCard from './ProductCard';
import Grid from '../../shared/Grid';
import { RootState } from '../../store';
import { IProducts } from '../../types';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
    width: min(100%, 800px);
`;

const ProductSearch = () => {
    const products = useSelector<RootState, IProducts>(
        (state) => state.product.products
    );

    return (
        <Container>
            <Grid>
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.images[0]}
                            price={product.price}
                            title={product.title}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};

export default ProductSearch;

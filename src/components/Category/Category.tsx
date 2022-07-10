import React from 'react';
import styled from '@emotion/styled';
import { ICategories } from '../../types';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import Link from '../../shared/Link';

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
    display: grid;
    place-items: center;
    a {
        justify-content: center;
        align-items: center;
        flex-direction: column;

        display: flex;
        gap: 15px;
    }
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
    const categories = useSelector<RootState, ICategories>(
        (state) => state.category.categories
    );

    return (
        <Container>
            {categories.map((category) => {
                return (
                    <Card key={category.id}>
                        <Link to={'/buscar?category=' + category.id}>
                            <Image src={category.image} />
                            <Text>{category.name}</Text>
                        </Link>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Category;

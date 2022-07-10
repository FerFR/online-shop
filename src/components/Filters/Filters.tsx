import React from 'react';
import styled from '@emotion/styled';
import Slider from '@mui/material/Slider';
import { RootState } from '../../store';
import { ICategories } from '../../types';
import { useSelector } from 'react-redux';

const Container = styled.aside`
    width: min(100%, 400px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    @media (min-width: 800px) {
        position: sticky;
        top: 120px;
    }
`;
const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0;
    width: 80%;
`;
const Title = styled.h3``;
const Select = styled.select`
    padding: 6px 12px;
    font-size: 18px;
    width: min(90%, 300px);
`;
const Filters = () => {
    const categories = useSelector<RootState, ICategories>(
        (state) => state.category.categories
    );
    const handleChange = (event: Event, newValue: number | number[]) => {
        setPriceValue(newValue as number);
    };
    const [priceValue, setPriceValue] = React.useState<number>(100);
    return (
        <Container>
            <Filter>
                <Title>Filtre por Categoria</Title>
                <Select>
                    <option value="null">Categorias</option>;
                    {categories.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        );
                    })}
                </Select>
            </Filter>
            <Filter>
                <Title>Filtre por Preço</Title>
                <Slider
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    value={priceValue}
                    onChange={handleChange}
                    max={300}
                />
            </Filter>
        </Container>
    );
};

export default Filters;

import React from 'react';
import styled from '@emotion/styled';
import Slider from '@mui/material/Slider';

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
    const [priceValue, setPriceValue] = React.useState<number[] | number>([
        10, 100,
    ]);
    return (
        <Container>
            <Filter>
                <Title>Filtre por Categoria</Title>
                <Select>
                    <option value="Categorias">Categorias</option>
                </Select>
            </Filter>
            <Filter>
                <Title>Filtre por Preço</Title>
                <Slider
                    getAriaLabel={() => 'Preço'}
                    value={priceValue}
                    onChange={(e, value) => setPriceValue(value)}
                    valueLabelDisplay="auto"
                    getAriaValueText={(value) => `R$${value}`}
                />
            </Filter>
        </Container>
    );
};

export default Filters;

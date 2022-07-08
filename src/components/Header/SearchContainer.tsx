import styled from '@emotion/styled';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
`;

const Input = styled.input`
    width: 90%;
    height: 100%;
    border: none;
    padding: 0 20px;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 10%;
    height: 100%;
    color: var(--main-color);
    border-left: 1px solid #eee;
    background-color: var(--text-secondary-color);
`;

const SearchContainer = () => {
    return (
        <Container>
            <Input placeholder="O que você procura ?" />
            <Button>
                <SearchIcon />
            </Button>
        </Container>
    );
};

export default SearchContainer;

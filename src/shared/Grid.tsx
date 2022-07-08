import styled from '@emotion/styled';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 30px;
    width: 100%;
    padding: 10px;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
export default Grid;

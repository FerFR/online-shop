import React from 'react';
import Layout from '../hoc/Layout';
import styled from '@emotion/styled';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Container = styled.div`
    background-color: #fff;
    padding: 40px 0;
    width: min(100%, 350px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    border-radius: 4px;
    border: 1px solid #eee;
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background-color: var(--main-color);
    color: white;
    padding: 5px 30px;
    border-radius: 32px;
`;
const Name = styled.h5``;
const Logout = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 2px 10px;
    border-radius: 32px;
    font-weight: bold;
`;

const Account = () => {
    return (
        <Container>
            <Header>
                <Name>Olá Fernando</Name>
                <Logout>
                    Sair
                    <MeetingRoomIcon />
                </Logout>
            </Header>
        </Container>
    );
};

export default Layout(Account);

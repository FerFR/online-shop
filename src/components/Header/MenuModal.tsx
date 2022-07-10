import styled from '@emotion/styled';
import React from 'react';
import Link from '../../shared/Link';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ReplyIcon from '@mui/icons-material/Reply';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ICategories } from '../../types';

interface Props {
    open: boolean;
    toggle: () => void;
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    height: 100vh;
    z-index: 10;
    top: 0;
    transition: 200ms;
    left: ${(props: { open: boolean }) => (props.open ? '0' : '-100%')};

    .blackscreen {
        display: ${(props) => (props.open ? 'block' : 'none')};
    }
`;
const Blackscreen = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #0000005e;
    top: 0;
    left: 0;
    transition: 200ms;
    z-index: 11;
`;
const Modal = styled.div`
    width: min(90%, 400px);
    z-index: 12;
    height: 100vh;
    position: absolute;
    background-color: var(--background-color);
    overflow-y: auto;
`;
const Header = styled.header`
    background-color: var(--main-color);
    color: var(--text-secondary-color);
    padding: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
const UserButton = styled.button`
    color: var(--main-color);
    background-color: var(--text-secondary-color);
    border-radius: 50%;
    padding: 3px 4px;
`;
const UserText = styled.span``;
const CloseButton = styled.button``;
const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const BottomItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 15px;
`;

const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    overflow-y: auto;
`;
const List = styled.ul`
    width: 100%;
`;
const CategoryItem = styled.li`
    margin: 5px 0;
    display: flex;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eee;
    font-size: 15px;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    border-radius: 4px;
`;
const CategoryButton = styled.button`
    margin: 5px 0;
    display: flex;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eee;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: relative;
`;
const CategoryButtonIcon = styled.span`
    position: absolute;
    right: 5px;
    svg {
        font-size: 18px;
    }
`;
const CategoryItemImage = styled.img`
    width: 30px;
`;

const LinkItem = styled.li`
    display: flex;
    width: 100%;
    padding: 10px 5px;
    background-color: #fff;
    border: 1px solid #eee;
    font-size: 14px;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`;
const LinkIcon = styled.span`
    color: #808080;
    display: grid;
    place-items: center;
`;
const Label = styled.h3``;

const MenuModal = ({ open, toggle }: Props) => {
    const categories = useSelector<RootState, ICategories>(
        (state) => state.category.categories
    );

    return (
        <Container open={open}>
            <Blackscreen className="blackscreen" onClick={toggle} />
            <Modal>
                <Header>
                    <HeaderTop>
                        <Link to="/minha-conta">
                            <Login>
                                <UserButton>
                                    <PersonIcon />
                                </UserButton>
                                <UserText>Entre ou Cadastre-se</UserText>
                            </Login>
                        </Link>
                        <CloseButton onClick={toggle}>
                            <CloseIcon />
                        </CloseButton>
                    </HeaderTop>
                    <HeaderBottom>
                        <Link to="/">
                            <BottomItem>
                                <HomeIcon />
                                Home
                            </BottomItem>
                        </Link>
                        <Link to="/minha-conta">
                            <BottomItem>
                                <InboxIcon />
                                Meus Pedidos
                            </BottomItem>
                        </Link>
                    </HeaderBottom>
                </Header>
                <Content>
                    <List>
                        {categories.map((category) => {
                            return (
                                <Link
                                    key={category.id}
                                    to={'/buscar?category=' + category.id}
                                >
                                    <CategoryItem>
                                        <CategoryItemImage
                                            src={category.image}
                                        />
                                        {category.name}
                                    </CategoryItem>
                                </Link>
                            );
                        })}
                        <Link to="/buscar">
                            <CategoryButton>
                                Ver todos os produtos
                                <CategoryButtonIcon>
                                    <ArrowForwardIosIcon />
                                </CategoryButtonIcon>
                            </CategoryButton>
                        </Link>
                    </List>
                    <Label>Institucional</Label>
                    <List>
                        <LinkItem>
                            <LinkIcon>
                                <InfoIcon />
                            </LinkIcon>
                            Quem Somos
                        </LinkItem>
                        <LinkItem>
                            <LinkIcon>
                                <FavoriteIcon />
                            </LinkIcon>
                            Meus Favoritos
                        </LinkItem>
                        <LinkItem>
                            <LinkIcon>
                                <GppGoodIcon />
                            </LinkIcon>
                            Garantia
                        </LinkItem>
                        <LinkItem>
                            <LinkIcon>
                                <ReplyIcon />
                            </LinkIcon>
                            Troca e Devoluções
                        </LinkItem>
                        <LinkItem>
                            <LinkIcon>
                                <LockIcon />
                            </LinkIcon>
                            Politica de Privacidade
                        </LinkItem>
                        <LinkItem>
                            <LinkIcon>
                                <PhoneIcon />
                            </LinkIcon>
                            Central de Atendimento
                        </LinkItem>
                    </List>
                </Content>
            </Modal>
        </Container>
    );
};

export default MenuModal;

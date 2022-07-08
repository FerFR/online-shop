import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';

const Container = styled.div`
    width: 100%;
    position: fixed;
    height: 100vh;
    z-index: 10;
    top: 0;
    transition: 200ms;
    right: ${(props: { open: boolean }) => (props.open ? '0' : '-100%')};

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
    right: 0;
    top: 0;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const CloseButton = styled.button`
    svg {
        font-size: 30px;
    }
`;
const Total = styled.h3`
    margin: 20px 0;
`;
const Finish = styled.button`
    border-radius: 30px;
    width: 90%;
    padding: 12px;
    background-color: var(--main-color);
    font-size: 20px;
    font-weight: bold;
    color: var(--text-secondary-color);
`;

interface Props {
    open: boolean;
    toggle: () => void;
}

const CartModal = ({ open, toggle }: Props) => {
    return (
        <Container open={open}>
            <Blackscreen className="blackscreen" onClick={toggle} />
            <Modal>
                <Header>
                    <CloseButton onClick={toggle}>
                        <CloseIcon />
                    </CloseButton>
                </Header>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <Total>Total: R$500,00</Total>
                <Finish>Finalizar Compra</Finish>
            </Modal>
        </Container>
    );
};

export default CartModal;

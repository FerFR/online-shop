import React from 'react';
import styled from '@emotion/styled';
import Info from './Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Container = styled.footer`
    padding: 40px 20px;
    background-color: #ececec;
    width: 100%;
`;
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: min(100%, 300px);
`;
const Title = styled.h4`
    margin: 25px 0;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    svg {
        color: var(--main-color);
    }
`;
const Image = styled.img`
    width: min(70%, 250px);
`;
const Inline = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;
const Social = styled.span`
    border-radius: 50%;
    background-color: var(--main-color);
    padding: 8px 9px;
    display: grid;
    place-items: center;
    i {
        color: var(--text-secondary-color);
    }
`;
const End = styled.div`
    background-color: var(--main-color);
    padding: 30px;
    display: grid;
    place-items: center;
    text-align: center;
`;
const Text = styled.span`
    color: var(--text-secondary-color);
`;

const Footer = () => {
    return (
        <>
            <Container>
                <div className="content">
                    <Info />
                    <Content>
                        <Wrapper>
                            <Title>Atendimento</Title>
                            <List>
                                <Item>Segunda a sexta: 8:00 às 23:00h</Item>
                                <Item>
                                    <LocalPhoneIcon />
                                    (34) 9 3333-3333
                                </Item>
                            </List>
                        </Wrapper>
                        <Wrapper>
                            <Title>Institucional</Title>
                            <List>
                                <Item>Home</Item>
                                <Item>Quem somos</Item>
                                <Item>Garantia</Item>
                                <Item>Produtos</Item>
                            </List>
                        </Wrapper>
                        <Wrapper>
                            <Title>Ajuda</Title>
                            <List>
                                <Item>Políticas de devolução e trocas</Item>
                                <Item>Políticas de privacidade</Item>
                                <Item>Fale conosco</Item>
                                <Item>Entregas e prazos</Item>
                            </List>
                        </Wrapper>
                        <Wrapper>
                            <Title>Meus Pedidos</Title>
                            <List>
                                <Item>Acompanhe seus pedidos</Item>
                                <Item>Editar Cadastro</Item>
                            </List>
                        </Wrapper>
                        <Wrapper>
                            <Title>Formas de pagamento</Title>
                            <Image
                                src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/formas-de-pagamento.jpg"
                                alt="Mercado Pago"
                            />
                        </Wrapper>
                        <Wrapper>
                            <Title>Site Blindado</Title>
                            <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/hostgerente-ssl-3.png" />
                        </Wrapper>
                        <Wrapper>
                            <Title>Nos acompanhe</Title>
                            <Inline>
                                <Social>
                                    <i className="fab fa-facebook"></i>
                                </Social>
                                <Social>
                                    <i className="fab fa-instagram"></i>
                                </Social>
                                <Social>
                                    <i className="fab fa-pinterest"></i>
                                </Social>
                                <Social>
                                    <i className="fab fa-youtube"></i>
                                </Social>
                            </Inline>
                        </Wrapper>
                    </Content>
                </div>
            </Container>
            <End>
                <Text>
                    &copy; 2022 Online Shop - Todos os direitos reservados.
                </Text>
            </End>
        </>
    );
};

export default Footer;

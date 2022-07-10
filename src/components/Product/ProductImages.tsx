import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: min(100%, 350px);
`;
const Inline = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;
const Icon = styled.img`
    width: 70px;
    height: 70px;
    opacity: 0.4;
    cursor: pointer;
    &.active {
        opacity: 1;
    }
`;

const ProductImages = () => {
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const principalImage = document.getElementById('principal-image');
        const src = e.currentTarget.getAttribute('src');
        principalImage?.setAttribute('src', src!);
        document
            .querySelector('#images-inline .active')
            ?.classList.remove('active');
        e.currentTarget.classList.add('active');
    };

    return (
        <Container>
            <Image
                id="principal-image"
                src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/H265c6040212b43a78db065e8b8de0bbdO.jpg"
            />
            <Inline id="images-inline">
                <Icon
                    className="active"
                    src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/H265c6040212b43a78db065e8b8de0bbdO.jpg"
                    onClick={handleClick}
                />
                <Icon
                    onClick={handleClick}
                    src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/H4f34da9dae01481e992a47b87b3d604ci.jpg"
                />
                <Icon
                    onClick={handleClick}
                    src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/H21d1f48d8a67446c9c3f1f6482cb5dbc5.jpg"
                />
                <Icon
                    onClick={handleClick}
                    src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/Hf088ea552dfd4ca9b0d90658d9f59318A.jpg"
                />
                <Icon
                    onClick={handleClick}
                    src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/Hf088ea552dfd4ca9b0d90658d9f59318A.jpg"
                />
            </Inline>
        </Container>
    );
};

export default ProductImages;

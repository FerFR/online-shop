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

interface Props {
    images: string[];
}
const ProductImages = ({ images }: Props) => {
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
            <Image id="principal-image" src={images[0]} />
            <Inline id="images-inline">
                <Icon
                    className="active"
                    src={images[0]}
                    onClick={handleClick}
                />
                {images
                    .filter((image) => {
                        if (images[0] !== image) {
                            return image;
                        }
                    })
                    .map((image) => {
                        return <Icon src={image} onClick={handleClick} />;
                    })}
            </Inline>
        </Container>
    );
};

export default ProductImages;

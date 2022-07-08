import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import styled from '@emotion/styled';
import 'swiper/css/pagination';

const Mobile = styled.div`
    @media (min-width: 800px) {
        display: none;
    }
`;
const Desktop = styled.div`
    display: none;
    @media (min-width: 800px) {
        display: block;
    }
`;

const Image = styled.img`
    object-fit: cover;
    height: 380px;
    width: 100%;
    object-position: bottom;
`;
const ImageDesktop = styled.img`
    height: 650px;
    width: 100%;
    object-fit: cover;
`;

const Carousel = () => {
    return (
        <>
            <Mobile>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                >
                    <SwiperSlide>
                        <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-22-online-shop.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-33-online-shop.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-mobile-44-online-shop.png" />
                    </SwiperSlide>
                </Swiper>
            </Mobile>
            <Desktop>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                >
                    <SwiperSlide>
                        <ImageDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/626.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-2-online-shop.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageDesktop src="https://onlineshopacessorios.com/wp-content/uploads/2021/07/banner-4-online-shop.png" />
                    </SwiperSlide>
                </Swiper>
            </Desktop>
        </>
    );
};

export default Carousel;

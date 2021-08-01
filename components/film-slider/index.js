import React from 'react';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './film-slider.module.css';
const FilmSlider = ()=>{
    return (
        <div className='mt-5 mb-5'>
            <Swiper
                freeMode={true}
                slidesPerView={4}
                spaceBetween={20}
                dir="rtl"
            >
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film1.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film2.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film3.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film4.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film5.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.img src={"/assets/films/film6.jpg"} alt="image 1">

                        </Card.img>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmSlider;
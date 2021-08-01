import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import styles from './slider.module.css';
import SwiperCore, {Navigation,Pagination} from 'swiper'
import {useRouter} from 'next/router';
SwiperCore.use(Navigation,Pagination);

const HeaderSlider = ()=>{
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div>
            <Swiper
                className={styles.slider}
                navigation
                pagination={{clickable:true}}
            >
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide1.jpg"}></img><span className={styles.text_img_slider}>متن شماره 1</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide2.jpg"}></img><span className={styles.text_img_slider}>متن شماره 1</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide3.jpg"}></img><span className={styles.text_img_slider}>متن شماره 1</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide4.jpg"}></img><span className={styles.text_img_slider}>متن شماره 1</span></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeaderSlider
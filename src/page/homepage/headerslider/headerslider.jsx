import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



  

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const HeaderSlider=()=> {
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ 'clickable': true,"dynamicBullets": true}}
  
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-100" src="https://mimazy.com/storage/images/banners/2021/05/7sgbv7CaOXIRbpyKNShMEygpNNrvLSZynPLFMxqvTCYUsnQsCjoukzoTDP1mrpNq-1350x400.png" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src="https://mimazy.com/storage/images/banners/2021/05/Gy11yC7Sr6SyXMJWNnqkjDosRPtyHWniiLM0QbHwkcKVkjLp7epURwb5idh7VHDc-1350x400.png" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src="https://mimazy.com/storage/images/banners/2021/04/uOyKqr18QaqBeOZofxoa5ADSQNBujvjwKrn5pIg4b6vD6yjGafFqTRMDVHv3WkPv-1350x400.png" /></SwiperSlide>
      <SwiperSlide><img className="w-100" src="https://mimazy.com/storage/images/banners/2021/04/uSyjfKUcbt3JVHNZ3j9OTKJxRF0aWOZTeCLruTWjQsPSDvjNVzFuSnLek34apsoB-1350x400.png" /></SwiperSlide>
   
    </Swiper>
        </div>
    )
}

export default HeaderSlider

import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Content=({title,items})=>{
    console.log(title)
    return(
        <div>
        <h3>{title}</h3> 
       
            
            
            <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ 'clickable': true,"dynamicBullets": true}}
        
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
              {items.map(item=> 
            <SwiperSlide><img src={item.imgurl} /></SwiperSlide>
            )}  
          </Swiper>
            
            
           
  
        </div>
    )
}

export default Content
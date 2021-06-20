import React from 'react'
import CardSingle from '../../shop/card/cardsinglecomponent'
import './content.style.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Content=({title,items})=>{
  
    return(
        <div className="content mt-5 p-2">
        <h3 className="text-end">{title}</h3> 
       
            
            
            <Swiper
            spaceBetween={10}
            slidesPerView={5}
            navigation
            pagination={{ 'clickable': true,"dynamicBullets": true}}
        
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
              {items.map(item=> 
            <SwiperSlide>   <CardSingle  key={item.id} item={item} /></SwiperSlide>
            )}  
          </Swiper>
            
            
           
  
        </div>
    )
}

export default Content
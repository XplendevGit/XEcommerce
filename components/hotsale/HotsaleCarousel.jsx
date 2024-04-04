'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules'
import Producto from '@/components/interface/Producto';

const HotsaleCarousel = ({productos}) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
      640: {slidesPerView: 1},
      768: {slidesPerView: 2},
      960: {slidesPerView: 3},
      1440: {slidesPerView: 4},
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="popular-product-slider mb-8 ">

        {productos.map((producto) => {
          console.log(producto)
            return (
            <SwiperSlide key={producto._id}>
                <Producto producto={producto}/>
            </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default HotsaleCarousel
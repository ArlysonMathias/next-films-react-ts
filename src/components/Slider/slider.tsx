import {Swiper , SwiperProps, SwiperSlide} from "swiper/react";
import { ReactNode } from "react";
import { Navigation, Pagination, A11y} from "swiper"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export const Slider = ({ settings ,children}: SliderProps) => {
    return(
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    )
}
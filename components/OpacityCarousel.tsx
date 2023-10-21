import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

const temptation = [
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1897c843-a6e4-400f-ef17-19a5da228c00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/09a22561-63a3-4212-a7c9-ab30e1e55e00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/94f1c808-0edf-46a2-0879-1754dc401600/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f1ee045b-b77e-41c6-29ec-2989d30d0100/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f3f2d674-136b-4be0-00b4-23474f124f00/public",
];

type OpacityCarouselProps = {
  onClose: () => void;
};

const OpacityCarousel = ({ onClose }: OpacityCarouselProps) => {
  return (
    <div className="max-w-7xl absolute z-50 py-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="rollingSwiper"
      >
        {temptation.map((item, index) => {
          return (
            <SwiperSlide className="bg-white" key={index}>
              <Image src={item} alt="main" width={840} height={840} priority />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div onClick={onClose} className="flex justify-center items-center py-10">
        <button className="text-lg rounded-lg bg-blue-900 w-32 flex justify-center items-center py-2 hover:bg-blue-950 transition duration-150 ease-in-out">
          닫기
        </button>
      </div>
    </div>
  );
};

export default OpacityCarousel;

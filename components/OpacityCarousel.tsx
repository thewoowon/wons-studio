import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

const board: {
  description: string;
  collection: string[];
}[] = [
  {
    description:
      "시간은 직선적인가, 순환적인가. 아니면 주관적인 시간 인식에서 실재하는가, 객관적인 시간이 존재하는가.",
    collection: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1897c843-a6e4-400f-ef17-19a5da228c00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/09a22561-63a3-4212-a7c9-ab30e1e55e00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/94f1c808-0edf-46a2-0879-1754dc401600/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f1ee045b-b77e-41c6-29ec-2989d30d0100/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f3f2d674-136b-4be0-00b4-23474f124f00/public",
    ],
  },
  {
    description:
      "공간 사이에는 무엇을 담을 수 있는가. 또한 그 무한한 공간 사이에는 무엇이 존재하는가.",
    collection: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/68268ba2-186e-42a8-e398-a2e37596ff00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/411f37d7-abc7-4d88-898f-e89de41f8a00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/55e802bc-be8e-4ac0-92b0-f5b431337c00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/05ae4a87-a49f-4928-f1b4-5178cecc5f00/public",
    ],
  },
  {
    description:
      "가변적인 인간의 사고, 그 속에서 불변의 진리를 찾아 선택적 진실이라는 모래성을 부수고 가장 가까운 진실에 다가선다.",
    collection: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/c331cc74-925d-4f05-eb75-6bfcb1a20a00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/79e73ffc-d9e9-42d7-0b9e-55aa60a55500/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9d04bfde-f255-4492-da54-2d4d35a12b00/public",
    ],
  },
  {
    description: "유리 속에서 빛은 더욱 빛이난다.",
    collection: [],
  },
  {
    description: "어느덧 겨울소리가 들리기 시작한다.",
    collection: [
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ac3ae0f9-7c4f-4691-6c5c-a18a2b6b5500/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3024fd09-dc02-4aea-f7ce-da6d4a053c00/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/56d8c09a-eae7-4fa2-f5e5-d731efee6600/public",
      "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/295d0667-83f3-446b-e5ef-c8be26e12000/public",
    ],
  },
  {
    description:
      "기억은 끊임없이 반복되고 변화한다. 인간의 자조적인 기억은 더욱 그렇다.",
    collection: [],
  },
];

type OpacityCarouselProps = {
  onClose: () => void;
  indicator: number;
};

const OpacityCarousel = ({ onClose, indicator }: OpacityCarouselProps) => {
  return (
    <div className="max-w-7xl fixed z-50 py-10">
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
        {board[indicator].collection.map((item, index) => {
          return (
            <SwiperSlide className="bg-white" key={index}>
              <Image src={item} alt="main" width={840} height={840} priority />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bg-black py-10 px-6 min-h-fit my-4">
        {board[indicator].description}
      </div>
      <div onClick={onClose} className="flex justify-center items-center py-10">
        <button className="text-lg rounded-lg bg-blue-900 w-32 flex justify-center items-center py-2 hover:bg-blue-950 transition duration-150 ease-in-out">
          닫기
        </button>
      </div>
    </div>
  );
};

export default OpacityCarousel;

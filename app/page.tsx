"use client";
import Image from "next/image";
import emotion from "@emotion/styled";
import { useState } from "react";
import OpacityCarousel from "@/components/OpacityCarousel";
import Banner from "@/components/Banner";

const collection = [
  {
    title: "시간의 쌍곡선",
    src: "/images/first-collection.png",
  },
  {
    title: "공간사이",
    src: "/images/space_distance_1.png",
  },
  {
    title: "선택적 진실",
    src: "/images/selective_truth_1.png",
  },
];

export default function Home() {
  const [swiper, setSwiper] = useState(false);
  const [collectionIndex, setCollectionIndex] = useState(0);
  return (
    <main className="max-w-7xl min-h-screen mx-auto flex flex-col items-center py-24 px-16 text-white">
      <div className="text-3xl font-semibold pt-2 pb-6">
        <Image src={"/images/title.svg"} width={300} height={100} alt="title" />
      </div>
      <Banner />
      <Grid>
        {collection.map((item, index) => (
          <div
            key={index}
            className="p-2 shadow-md flex flex-col justify-center items-center transition duration-200 ease-in-out transform"
          >
            <div
              onClick={() => {
                setCollectionIndex(index);
                setSwiper(!swiper);
              }}
            >
              <Image
                src={item.src}
                alt="main"
                width={297}
                height={420}
                className="transition duration-200 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="text-lg pt-6 pb-2">{item.title}</div>
            <div className="text-sm">created by Won Woo</div>
          </div>
        ))}
      </Grid>
      {swiper && (
        <OpacityCarousel
          indicator={collectionIndex}
          onClose={() => {
            setSwiper(!swiper);
          }}
        />
      )}
    </main>
  );
}
// 제자리에서 회전
const Grid = emotion.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// server side rendering

"use client";
import Image from "next/image";
import emotion from "@emotion/styled";
import { useState } from "react";
import OpacityCarousel from "@/components/OpacityCarousel";

export default function Home() {
  const [swiper, setSwiper] = useState(false);
  return (
    <main className="max-w-7xl min-h-screen mx-auto flex flex-col items-center py-24 px-16 text-white">
      <div className="text-3xl font-semibold py-6 ">{"Won's Studio"}</div>
      <Grid>
        <div className="p-2 shadow-md flex flex-col justify-center items-center transition duration-200 ease-in-out transform">
          <div
            onClick={() => {
              setSwiper(!swiper);
            }}
          >
            <Image
              src={"/images/first-collection.png"}
              alt="main"
              width={297}
              height={420}
              className="transition duration-200 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="text-lg pt-6 pb-2">시간의 쌍곡선</div>
          <div className="text-sm">created by Won Woo</div>
        </div>
      </Grid>
      {swiper && (
        <OpacityCarousel
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

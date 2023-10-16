"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-xl font-semibold text-zinc-700 py-6">
        원스 스튜디오 준비중
      </div>
      {/* hover 시 z축으로 회전 */}
      <div className="p-2 shadow-md flex flex-col justify-center items-center transition duration-200 ease-in-out transform">
        <Image
          src={"/images/first-collection.png"}
          width={297}
          height={420}
          alt="main"
        />
      </div>
      <div className="text-lg py-2">시간의 쌍곡선</div>
      <div className="text-sm">Won Woo.</div>
    </main>
  );
}

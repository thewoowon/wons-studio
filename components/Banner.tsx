import Image from "next/image";
import emotion from "@emotion/styled";
import gsap from "gsap";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef(null);

  return (
    <Grid ref={ref}>
      <div className="overflow-hidden relative">
        <Image src={"/images/cloud.svg"} alt="images" fill />
      </div>
      <div className="overflow-hidden relative">
        <Image
          width={600}
          height={400}
          src={"/images/cylinder.svg"}
          alt="images"
        />
      </div>
      <div className="overflow-hidden relative">
        <Image
          width={600}
          height={400}
          src={"/images/mirror-ball.svg"}
          alt="images"
        />
      </div>
      <div className="overflow-hidden relative">
        <Image width={600} height={400} src={"/images/nine.svg"} alt="images" />
      </div>
      <div className="overflow-hidden relative">
        <Image
          width={600}
          height={400}
          src={"/images/sphere.svg"}
          alt="images"
        />
      </div>
      <div className="overflow-hidden relative">
        <Image
          width={600}
          height={400}
          src={"/images/torus.svg"}
          alt="images"
        />
      </div>
    </Grid>
  );
};

export default Banner;

const Grid = emotion.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        }

    & img {
        scale: 1.5;
    }

    & img:hover {
        transform: rotate(360deg);
        transition: transform 0.5s;
    }
`;

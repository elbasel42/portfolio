"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getRandomColor } from "@app/utils";

export const Dots = () => {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);

  const initVanta = () => {
    const effect = VANTA.DOTS({
      el: "#dotsElem",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1c1cde,
      color2: 0xff0000,
      backgroundColor: 0x0,
    });
    setBgHidden(false);
    return effect;
  };

  //* initial load
  useEffect(() => {
    if (!threeReady || !vantaReady) return;

    const vantaEffect = initVanta();

    const changeColor = () => {
      const randomColor = getRandomColor();
      vantaEffect.setOptions({
        color: randomColor,
      });
    };

    const resizeVanta = () => {
      vantaEffect.resize();
    };

    window.addEventListener("click", changeColor);
    window.addEventListener("resize", resizeVanta);

    return () => {
      if (!vantaEffect) return;
      vantaEffect.destroy();
      window.removeEventListener("click", changeColor);
      window.removeEventListener("resize", resizeVanta);
    };
  }, [threeReady, vantaReady]);

  return (
    <>
      <div
        id="dotsElem"
        className={twMerge(
          "duration-2000 -z-10 fixed inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onReady={() => setThreeReady(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
        onReady={() => setVantaReady(true)}
      />
    </>
  );
};

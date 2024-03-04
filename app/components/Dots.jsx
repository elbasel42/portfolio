"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getRandomColor } from "@app/utils";

export const Dots = () => {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);
  const [vantaEffect, setVantaEffect] = useState();

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
      size: 8.0,
      spacing: 36.0,
      showLines: true,
      color: 0x1c1cde,
      color2: 0xff0000,
      backgroundColor: 0x0,
    });
    setBgHidden(false);
    setVantaEffect(effect);
  };

  const resizeVanta = () => {
    if (!vantaEffect) return;
    setTimeout(() => {
      vantaEffect.resize();
    }, 1000);
  };

  const destroyEffect = () => {
    if (vantaEffect) vantaEffect.destroy();
  };

  //* initial load
  useEffect(() => {
    if (!threeLoaded || !vantaLoaded) return;
    initVanta();
    window.addEventListener("resize", resizeVanta);
    return () => {
      destroyEffect();
      window.removeEventListener("resize", resizeVanta);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threeLoaded, vantaLoaded]);

  //* subsequent loading when navigating from another page
  useEffect(() => {
    try {
      initVanta();
      window.addEventListener("resize", resizeVanta);
    } catch (error) {}

    return () => {
      destroyEffect();
      window.removeEventListener("resize", resizeVanta);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDotsColor = () => {
    const randomColor = getRandomColor();
    effect.setOptions({
      color: randomColor,
    });
  };

  return (
    <>
      <div
        onClick={() => changeDotsColor()}
        id="dotsElem"
        className={twMerge(
          "duration-2000 -z-10 fixed inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => setThreeLoaded(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
        onLoad={() => setVantaLoaded(true)}
      />
    </>
  );
};

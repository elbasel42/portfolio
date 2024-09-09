"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getRandomColor, sleep } from "@app/utils";

export const Rings = () => {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);

  const initVanta = () => {
    if (!window.THREE || !window.VANTA) {
      setTimeout(initVanta, 1000);
    }

    const effect = VANTA.RINGS({
      el: "#ringsElem",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color: 0x7991b0,
      THREE: window.THREE,
    });
    setBgHidden(false);
    return effect;
  };

  useEffect(() => {
    if (!threeReady || !vantaReady) return;

    const vantaEffect = initVanta();

    const resizeVanta = () => {
      setTimeout(() => {
        vantaEffect.resize();
      }, 1000);
    };

    window.addEventListener("resize", resizeVanta);

    return () => {
      if (!vantaEffect) return;
      vantaEffect.destroy();
      window.removeEventListener("resize", resizeVanta);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threeReady, vantaReady]);

  return (
    <>
      <div
        id="ringsElem"
        className={twMerge(
          "duration-2000 transition-all -z-10 fixed inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onReady={() => sleep(1).then(() => setThreeReady(true))}
        onError={(e) => console.log(e)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js"
        onReady={() => sleep(1).then(() => setVantaReady(true))}
        onError={(e) => console.log(e)}
      />
    </>
  );
};

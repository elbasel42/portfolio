"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sleep } from "@app/utils";

export const Birds = () => {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);

  const initVanta = () => {
    if (!window.THREE || !window.VANTA) {
      setTimeout(initVanta, 1000);
    }

    const effect = VANTA.BIRDS({
      el: "#birdsElem",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color2: 0xff0000,
      colorMode: "lerp",
      birdSize: 0.5,
    });
    setBgHidden(false);
    return effect;
  };

  //* initial load
  useEffect(() => {
    if (!threeReady || !vantaReady) return;

    const vantaEffect = initVanta();

    return () => {
      if (!vantaEffect) return;
      vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threeReady, vantaReady]);

  return (
    <>
      <div
        id="birdsElem"
        className={twMerge(
          "duration-2000 -z-10 absolute inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onReady={() => sleep(1).then(() => setThreeReady(true))}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        onReady={() => sleep(1).then(() => setVantaReady(true))}
      />
    </>
  );
};

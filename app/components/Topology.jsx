"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sleep } from "@app/utils";

export const Topology = () => {
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [pReady, setPReady] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);

  const initVanta = () => {
    if (!window.THREE || !window.VANTA || !window.p5) {
      setTimeout(initVanta, 1000);
      return;
    }

    const effect = window.VANTA.TOPOLOGY({
      el: "#topologyElem",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 0.5,
      color: 0x964e63,
      backgroundColor: 0x0,
      THREE: window.THREE,
      p5: window.p5,
    });
    setBgHidden(false);
    return effect;
  };

  //* initial load
  useEffect(() => {
    if (!threeReady || !vantaReady || !pReady) return;

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
        id="topologyElem"
        className={twMerge(
          "duration-2000 -z-10 fixed inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
        onLoad={() => sleep(1).then(() => setPReady(true))}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onReady={() => sleep(1).then(() => setThreeReady(true))}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
        onReady={() => sleep(1).then(() => setVantaReady(true))}
      />
    </>
  );
};

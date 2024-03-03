"use client";
import Script from "next/script";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { getRandomColor } from "@app/utils/getRandomColor";

export const Net = () => {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);
  const [effect, setEffect] = useState();

  useEffect(() => {
    if (!threeLoaded || !vantaLoaded) return;

    const effect = VANTA.NET({
      el: "#netElem",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color: 0xff0000,
    });
    setEffect(effect)
    setBgHidden(false);

    return () => {
      effect.destroy();
    };
  }, [threeLoaded, vantaLoaded]);

 const changeNetColor = () => {
    const randomColor = getRandomColor()
    effect.setOptions({
        color: randomColor
    })
 } 

  return (
    <>
      <div
      onClick={() => changeNetColor()}
        id="netElem"
        className={twMerge(
          "duration-1000 fixed inset-0 h-screen w-screen",
          bgHidden && "opacity-0"
        )}
      ></div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => setThreeLoaded(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        onLoad={() => setVantaLoaded(true)}
      />
    </>
  );
};

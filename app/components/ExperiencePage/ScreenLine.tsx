import { type ReactNode } from "react";

interface ScreenLineProps {
  children?: ReactNode;
}

export const ScreenLine = ({ children }: ScreenLineProps) => {
  return (
    <div className="snap-center h-[100dvh] left-4 bg-white w-2 relative">
      <span className="absolute w-6 h-6 transform scale-125 -translate-x-[8px] -translate-y-1/2 bg-red-500 rounded-full top-1/2" />
      {children}
    </div>
  );
};

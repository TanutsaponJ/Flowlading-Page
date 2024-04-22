import React, { useState, useLayoutEffect } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export function useWindowScreenOverSize(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

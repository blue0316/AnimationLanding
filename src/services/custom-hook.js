import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handler = (event) => {
      // Check if the mouse click was within the element's ref.

      if (!ref || ref.length === 0) return;
      const node = ref.find((x) => x?.current?.contains(event.target));

      if (!node) {
        callback();
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, [ref, callback]);
};

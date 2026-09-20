import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { lenisInstance } from "./SmoothScroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // seulement quand on clique sur un nouveau lien
    if (navigationType === "PUSH") {
      requestAnimationFrame(() => {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, {
            immediate: true,
          });
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  }, [pathname, navigationType]);

  return null;
}

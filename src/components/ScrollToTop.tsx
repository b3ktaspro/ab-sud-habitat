import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenisInstance } from "../App";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, {
        immediate: true,
      });
    }
  }, [pathname]);

  return null;
}

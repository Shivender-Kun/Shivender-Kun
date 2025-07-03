"use client";

import { useEffect, useState } from "react";
import { ArrowBigUp } from "lucide-react";
import { Button } from "./button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const homeElement = document.getElementById("home") as HTMLElement;

    const toggleScrollToTopButton = () =>
      setIsVisible(homeElement.scrollTop > 200);

    homeElement.addEventListener("scroll", toggleScrollToTopButton);

    return () => {
      homeElement.removeEventListener("scroll", toggleScrollToTopButton);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-6 right-6 z-50">
      <Button
        size="icon"
        variant="outline"
        title="Scroll to top"
        aria-label={`Scroll to top of the page`}
        className={`${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } shadow-lg hover:shadow-xl transition-opacity duration-300`}
        onClick={() => {
          const el = document.getElementById("home");
          if (el) el.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowBigUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default ScrollToTop;

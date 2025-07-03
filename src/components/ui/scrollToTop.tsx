"use client";

import { ArrowBigUp } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  //
  useEffect(() => {
    const toggleScrollToTopButton = () => setIsVisible(window.scrollY > 200);

    window.addEventListener("scroll", toggleScrollToTopButton);

    return () => {
      window.removeEventListener("scroll", toggleScrollToTopButton);
    };
  }, []);

  // Render the button only if it is visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="icon"
        variant="outline"
        title="Scroll to top"
        aria-label={`Scroll to top of the page`}
        className={`${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } shadow-lg hover:shadow-xl transition-opacity duration-300`}
      >
        <Link href="#top">
          <ArrowBigUp className="w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
};

export default ScrollToTop;

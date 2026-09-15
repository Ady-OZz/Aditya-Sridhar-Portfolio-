import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled close to the bottom of the page
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setIsVisible(isBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="group fixed bottom-24 right-4 z-50 flex h-12 items-center justify-center rounded-full bg-accent px-3 text-background shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 sm:bottom-28 sm:right-8 sm:px-4"
        >
          <FiArrowUp className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs">
            Back to Up
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

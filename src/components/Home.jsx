import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="container">
      <motion.h1 style={{ y: textY }}>PARALLAX</motion.h1>
      <motion.div className="img-1" style={{ y: backgroundY }}></motion.div>
      <div className="img-2"></div>
    </div>
  );
}

export default Home;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ScrollReveal({
  children,
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  ...props
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
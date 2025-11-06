"use client";
import * as React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export const fadeUp = (delay = 0): Variants => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, delay } },
});

type MotionDivProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function MotionDiv({ children, delay = 0, ...rest }: MotionDivProps) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : fadeUp(delay);

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

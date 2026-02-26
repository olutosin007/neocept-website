import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export function useCountUp(target: number, duration = 1.4) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  
  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: 'easeOut'
      });
      return controls.stop;
    }
  }, [inView, target, duration, count]);
  
  return { ref, rounded };
}

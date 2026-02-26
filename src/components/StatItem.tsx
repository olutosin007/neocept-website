import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { fadeUp } from '../lib/animations';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

export function StatItem({ value, suffix, label, delay = 0 }: StatItemProps) {
  const { ref, rounded } = useCountUp(value);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });
  
  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center justify-center py-10 px-6"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      <div className="flex items-end gap-0.5">
        <motion.span
          ref={ref}
          className="font-display text-5xl md:text-6xl text-white leading-none"
        >
          {rounded}
        </motion.span>
        {suffix && (
          <span
            className="font-display text-white leading-none"
            style={{ fontSize: '0.75em', opacity: 0.9 }}
          >
            {suffix}
          </span>
        )}
      </div>
      <span className="font-body text-sm text-white/70 mt-2 tracking-widest uppercase">
        {label}
      </span>
    </motion.div>
  );
}

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn } from '../lib/animations';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  
  return (
    <motion.p
      ref={ref}
      className={`font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase ${className}`}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={0}
    >
      {children}
    </motion.p>
  );
}

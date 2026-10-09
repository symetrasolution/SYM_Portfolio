import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  intensity?: 'subtle' | 'moderate';
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  id,
  intensity = 'subtle',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 10%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate subtle architectural translation based on intensity
  const yOffset = intensity === 'moderate' ? 40 : 24;

  const y = useTransform(smoothProgress, [0, 0.4, 0.9, 1], [yOffset, 0, 0, -yOffset * 0.5]);
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.85, 1], [0.35, 1, 1, 0.75]);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={containerRef} id={id} className={`relative ${className}`}>
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y,
                opacity,
                willChange: 'transform, opacity',
              }
        }
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface AnimationProps extends PropsWithChildren {
  x?: number;
  y?: number;
  once: boolean;
  delay?: number;
  className?: string;
}

export const Animation = ({
  className,
  children,
  once,
  delay,
  x,
  y,
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: once, amount: 0.25 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

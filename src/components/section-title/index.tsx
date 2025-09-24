import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  style?: React.CSSProperties;
}

export const SectionTitle = ({ title, style }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      style={style}
      className="mb-16 text-center"
    >
      <h2 className="gradient-text mb-4 text-4xl font-bold">{title}</h2>
      <div className="bg-primary mx-auto h-1 w-24"></div>
    </motion.div>
  );
};

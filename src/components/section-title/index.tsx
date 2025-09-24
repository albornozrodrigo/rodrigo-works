import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  // ref: React.RefObject<HTMLDivElement>;
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
    /*<div ref={ref} style={style} className="flex justify-center mb-16 h-14">
      <div className="flex items-center">
        <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></span>
        <h2 className="bg-indigo-950 w-fit font-bold mb-4 gradient-text rounded-md text-white p-2 px-3 text-2xl">
          {title}
        </h2>
        <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></span>
      </div>
    </div>*/
  );
};

import { motion } from 'framer-motion';
import { SectionTitle } from '../../../../components/section-title';
import { AppBroker } from './app-broker';
import { FreightLogin } from './freight-login';
import { Loveg } from './loveg';
import { Store } from './store';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Cases e Projetos" />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <Store />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <FreightLogin />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AppBroker />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Loveg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Button from '@/components/Button';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        </motion.div>

        {/* Bio */}
        <motion.section 
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="prose max-w-none">
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              I&apos;m {contentData.profile.name.split(' ')[0]}, a full-stack engineer focused on building fast, practical, AI-enabled products.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              {contentData.profile.bio}
            </motion.p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">I value:</h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contentData.values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
                variants={fadeInUp}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 dark:text-gray-600">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Summary */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;ve built tools for creators, enterprises, and startups, with a strong overlap in:
            </p>
            <div className="flex flex-wrap gap-3">
              {contentData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div 
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-4">
            <Button href="/work">View My Work</Button>
            <Button href="/contact" variant="secondary">Get In Touch</Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

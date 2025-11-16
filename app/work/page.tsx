'use client';

import Button from '@/components/Button';
import Link from 'next/link';
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

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={fadeInUp}
          >
            Work
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl"
            variants={fadeInUp}
          >
            A collection of professional, freelance, and personal projects that showcase my engineering range.
          </motion.p>
        </motion.div>

        {/* Professional Work */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Professional Work
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {contentData.projects.filter(p => p.category === 'professional').map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags.join(', ')}
                href={`/work/${project.id}`}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Freelance Work */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Freelance Work
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contentData.projects.filter(p => p.category === 'freelance').map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags.join(', ')}
                href={`/work/${project.id}`}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Side Projects */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Side Projects
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contentData.projects.filter(p => p.category === 'side').map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags.join(', ')}
                href={`/work/${project.id}`}
              />
            ))}
          </motion.div>
        </motion.section>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button href="/contact">Let&apos;s Work Together</Button>
        </motion.div>
      </div>
    </main>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string;
  href: string;
}

function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <motion.div 
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-2xl p-6 transition-all duration-300"
        variants={fadeInUp}
        whileHover={{ y: -4 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{tags}</p>
        
        <div className="mt-4 flex items-center text-gray-900 dark:text-white text-sm font-medium transition-colors">
          View Project
          <motion.svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </div>
      </motion.div>
    </Link>
  );
}

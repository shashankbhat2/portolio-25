'use client';

import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Profile */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12 mb-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="relative w-48 h-48 overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                <Image
                  src="/profile.jpeg"
                  alt="Shashank Bhat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                variants={fadeInUp}
              >
                I build fast, scalable, <span className="italic">AI-powered</span> digital products.
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                From enterprise dashboards to creator-focused SaaS, I specialize in building smooth, 
                production-ready experiences using <span className="text-gray-900 dark:text-white font-medium">React, FastAPI, Node.js, and AI pipelines</span>.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button href="/work">View My Work</Button>
                <Button href="/contact" variant="secondary">Contact Me</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
            {/* Featured Work */}
      <section className="py-20 px-6 lg:px-8 relative border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex justify-between items-end mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Featured Work</h2>
              <p className="text-gray-600 dark:text-gray-400">Selected projects I've built recently</p>
            </div>
            <Button href="/work" variant="secondary">View All</Button>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contentData.projects.filter(p => p.featured).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags.join(' • ')}
                href={`/work/${project.id}`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I build products end-to-end.
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Frontend */}
            <motion.div 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Frontend Engineering</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm list-disc list-inside">
                {contentData.skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>

            {/* Backend & AI */}
            <motion.div 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Backend & AI Systems</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm list-disc list-inside">
                {contentData.skills.backend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>

            {/* Product Building */}
            <motion.div 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Product Building</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm list-disc list-inside">
                {contentData.skills.product.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 lg:px-8 relative border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>

          <motion.div 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contentData.experience.slice(0, 3).map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                role={exp.title}
                period={exp.period}
                description={exp.description}
                tags={exp.tags}
              />
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button href="/work">See All Work</Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative border-t border-gray-200 dark:border-gray-800">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m open to freelance work, collaborations, and product engineering roles.
          </p>
          <Button href="/contact">Contact Me</Button>
        </motion.div>
      </section>
    </main>
  );
}

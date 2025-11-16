'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  tags?: string[];
}

export default function ExperienceCard({ 
  company, 
  role, 
  period, 
  description,
  tags 
}: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 p-6 transition-all"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{company}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-500 text-sm mt-2 sm:mt-0">{period}</span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

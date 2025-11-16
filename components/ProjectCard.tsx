'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string;
  href: string;
  image?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  href,
  image
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div 
        className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-200 dark:text-gray-800">{title.charAt(0)}</div>
            </div>
          )}
        </div>
        
        <div className="relative p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">{tags}</p>
          
          <div className="mt-4 flex items-center text-gray-900 dark:text-white text-sm font-medium">
            View Case Study
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

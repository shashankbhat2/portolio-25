'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 text-sm border";
  const variants = {
    primary: "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100",
    secondary: "bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = motion(href ? Link : 'button');

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionComponent>
  );
}

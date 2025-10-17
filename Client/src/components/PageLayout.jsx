import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

export default function PageLayout({ children, title, subtitle }) {
  return (
    <div className='mt-10 bg-[#F4F4F4]'>
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        >
        <div className="max-w-7xl mx-auto">
            {title && (
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                {subtitle && (
                <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
                )}
            </div>
            )}
            {children}
        </div>
        </motion.div>
    </div>
  );
}
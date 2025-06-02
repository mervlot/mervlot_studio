/* eslint-disable no-unused-vars */
// src/components/HeroSection.jsx 
import React from 'react';
import { motion } from 'motion/react';

const HeroSection = () => {
    return (
        <section className=" flex items-center md:px-30 select-none  h-screen justify-center justify-self-center  justify-items-center">
            {/* Dynamic Animated Background */}


            {/* Content */}
            <div className=" z-10 text-center px-6 justify-center justify-self-center">
                <motion.h1
                    className="text-5xl text-gradient logo-m md:text-7xl font-extrabold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Mervlot Studio
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl text-gray-300 text-shadow-lg mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Explore cutting-edge components and templates for your next-gen projects.
                </motion.p>
                <motion.a href="/mervlot_studio/#/home" className=" cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}>
                    <motion.button

                        className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}

                    >
                        Get Started
                    </motion.button>
                </motion.a>

            </div>
        </section>
    );
};

export default HeroSection; 

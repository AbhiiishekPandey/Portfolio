import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointerClick } from 'lucide-react';
import scatterImg from '../assets/data-scatter.png';
import cubeImg from '../assets/data-cube.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-dark">
            {/* Background Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.img
                    src={scatterImg}
                    alt="Data Scatter"
                    className="absolute top-20 left-[10%] w-64 opacity-60 blur-sm"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={cubeImg}
                    alt="Data Cube"
                    className="absolute bottom-20 right-[5%] w-48 opacity-60 blur-xs"
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -15, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-xl md:text-2xl text-neon-purple font-medium mb-4 tracking-wide uppercase">
                        Abhishek Pandey
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight text-white">
                        TURNING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            CHAOS
                        </span> <br />
                        INTO <span className="text-electric-violet">INSIGHTS.</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-light">
                        Building predictive models, scalable data pipelines, and turning raw numbers into actionable intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-electric-violet rounded-full text-white font-bold text-lg flex items-center shadow-glow hover:bg-violet-600 transition-all"
                        >
                            View Projects <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors flex items-center backdrop-blur-md"
                        >
                            Download CV <Download className="ml-2 w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointerClick } from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i === text.length) clearInterval(timer);
            }, 50); // Typing speed
            return () => clearInterval(timer);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight text-white min-h-[160px] md:min-h-[240px]">
                        <span className="block mb-2">
                            <TypewriterText text="TURNING" delay={0} />
                        </span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 inline-block"
                        >
                            CHAOS
                        </motion.span> <br />
                        <TypewriterText text="INTO " delay={2000} />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                            className="text-electric-violet inline-block"
                        >
                            INSIGHTS.
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-light"
                    >
                        Building predictive models, scalable data pipelines, and turning raw numbers into actionable intelligence.
                    </motion.p>

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

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-electric-violet mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I'm a dedicated Full Stack Developer with a passion for building beautiful, responsive, and user-friendly web applications.
                            With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to create digital experiences that solve real-world problems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or gaming.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-neon-purple/50 transition-colors">
                                <Code className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                                <h3 className="font-semibold text-white">Clean Code</h3>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-neon-purple/50 transition-colors">
                                <Globe className="w-8 h-8 text-electric-violet mx-auto mb-3" />
                                <h3 className="font-semibold text-white">Responsive</h3>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-neon-purple/50 transition-colors">
                                <Cpu className="w-8 h-8 text-white mx-auto mb-3" />
                                <h3 className="font-semibold text-white">Performant</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet to-neon-purple rounded-2xl rotate-6 opacity-30 blur-lg"></div>
                            <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                                {/* Placeholder for Profile Image */}
                                <span className="text-gray-500 text-lg">Profile Image</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

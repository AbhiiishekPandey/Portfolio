import React from 'react';
import { motion } from 'framer-motion';
import { Github, Database, Brain, Server, Code, ExternalLink, Terminal } from 'lucide-react';
import scatterImg from '../assets/data-scatter.png';

const BentoGrid = () => {
    return (
        <section id="work" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Selected <span className="text-neon-purple">Work</span> & <span className="text-electric-violet">Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        A collection of data-driven projects and the technologies I use to build them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-6">
                    {/* Card 1: Featured Project (Large) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 row-span-2 bg-[#111] border border-white/10 rounded-3xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent z-0" />
                        <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-bold uppercase tracking-wider">
                                        Featured Project
                                    </span>
                                    <ExternalLink className="text-gray-500 hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 group-hover:text-neon-purple transition-colors">Predictive Modeling Engine</h3>
                                <p className="text-gray-400 mb-6 max-w-md">
                                    An end-to-end machine learning pipeline that forecasts inventory needs with 94% accuracy using historical sales data and seasonal trend analysis.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex gap-2 mb-6">
                                    {['Python', 'Scikit-Learn', 'Pandas', 'FastAPI'].map(tech => (
                                        <span key={tech} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Abstract Visualization Placeholder */}
                                <div className="w-full h-48 rounded-xl overflow-hidden relative border border-white/5 bg-black/50">
                                    <img src={scatterImg} alt="Visualization" className="absolute -right-10 -bottom-10 w-full h-full object-contain opacity-50 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="font-mono text-xs text-green-400 bg-black/80 px-2 py-1 rounded">
                                            Model Accuracy: 94.2%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Tech Stack (Medium) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Terminal size={20} className="text-blue-400" /> Tech Stack
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: 'Python', icon: <Code size={18} />, color: 'text-yellow-400' },
                                { name: 'TensorFlow', icon: <Brain size={18} />, color: 'text-orange-400' },
                                { name: 'SQL', icon: <Database size={18} />, color: 'text-blue-400' },
                                { name: 'AWS', icon: <Server size={18} />, color: 'text-gray-200' },
                            ].map(skill => (
                                <div key={skill.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <span className={skill.color}>{skill.icon}</span>
                                    <span className="font-medium text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3: Profiles/Links (Small) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-electric-violet border border-white/10 rounded-3xl p-8 flex flex-col justify-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4 text-white">Let's Connect</h3>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors text-white">
                                    <Github size={24} />
                                </a>
                                <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors text-white">
                                    <Database size={24} /> {/* Placeholder for Kaggle */}
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-white/80">
                                Check out my code and datasets.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;

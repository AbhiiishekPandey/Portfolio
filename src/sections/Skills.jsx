import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 'Advanced', color: '#61DAFB' },
    { name: 'JavaScript', level: 'Advanced', color: '#F7DF1E' },
    { name: 'TypeScript', level: 'Intermediate', color: '#3178C6' },
    { name: 'Tailwind CSS', level: 'Advanced', color: '#38B2AC' },
    { name: 'Node.js', level: 'Intermediate', color: '#339933' },
    { name: 'Next.js', level: 'Intermediate', color: '#000000' },
    { name: 'HTML5', level: 'Advanced', color: '#E34F26' },
    { name: 'CSS3', level: 'Advanced', color: '#1572B6' },
    { name: 'Git', level: 'Intermediate', color: '#F05032' },
    { name: 'Framer Motion', level: 'Intermediate', color: '#0055FF' },
    { name: 'Figma', level: 'Basic', color: '#F24E1E' },
    { name: 'SQL', level: 'Basic', color: '#003B57' },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-[#0f0f0f]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Technologies I work with to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex flex-col items-center">
                                {/* We can use icons here later, for now just a colored circle */}
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: `${skill.color}20`, boxShadow: `0 0 20px ${skill.color}10` }}
                                >
                                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: skill.color }}></div>
                                </div>
                                <h3 className="font-semibold text-lg text-white mb-1">{skill.name}</h3>
                                <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded-full">{skill.level}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

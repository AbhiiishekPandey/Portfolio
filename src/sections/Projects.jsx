import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A fully functional modern e-commerce platform with cart functionality, user authentication, and stripe payments.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '', // Placeholder
        github: '#',
        live: '#',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.',
        tech: ['Next.js', 'Firebase', 'Tailwind', 'DnD'],
        image: '', // Placeholder
        github: '#',
        live: '#',
    },
    {
        title: 'AI Image Generator',
        description: 'An application that uses OpenAI API to generate images based on text prompts with a gallery view.',
        tech: ['React', 'OpenAI API', 'Express', 'Cloudinary'],
        image: '', // Placeholder
        github: '#',
        live: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors duration-300 flex flex-col h-full"
                        >
                            {/* Project Image Placeholder - In a real app this would be an img tag */}
                            <div className="h-48 bg-[#1a1a1a] relative overflow-hidden group-hover:bg-[#222] transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 group-hover:text-gray-600 transition-colors">
                                    <Folder size={48} />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        View All Projects <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

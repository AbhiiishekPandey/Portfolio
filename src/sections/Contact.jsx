import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0f0f0f]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's talk about everything!</h3>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Email</h4>
                                <p className="text-gray-400">abhishekpandeyx01@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Phone</h4>
                                <p className="text-gray-400">+1 (123) 456-7890</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Location</h4>
                                <p className="text-gray-400">Ludhiana, Punjab, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

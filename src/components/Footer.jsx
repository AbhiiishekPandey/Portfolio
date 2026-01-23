import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/90 text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                        Abhishek Pandey.
                    </h3>
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Abhishek Pandey. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
                    <a href="mailto:abhishekpandeyx01@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors"><Mail size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

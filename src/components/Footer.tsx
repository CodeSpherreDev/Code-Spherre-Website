import React from 'react';
import { Github, Twitter, Linkedin, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Code Spherre
            </span>
          </div>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Code Spherre. All rights reserved.
          </p>
          <p className="text-gray-500 text-center">
             Design By Abhranil Dutta.
          </p>
        </div>
      </div>
    </footer>
  );
}
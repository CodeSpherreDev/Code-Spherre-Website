import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_100%)]" />
        {/* Animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: '-1px -1px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          {/* Replace with Logo */}
          <img
            src="https://ik.imagekit.io/4arf8q5j1/code%20sphere%20logo.png?updatedAt=1735817418748"
            alt="Code Sphere Logo"
            className="h-40 w-40 animate-pulse mr-3" // Adjust size as needed
          />
          <Sparkles className="h-8 w-8 text-purple-500 animate-bounce" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
            Unleashing the Future of Coding!
          </span>
        </h1>

        <p
          className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0"
          style={{
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
          }}
        >
          Join our community of passionate developers and innovators shaping the future of technology.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{
            animationDelay: '0.6s',
            animationFillMode: 'forwards',
          }}
        >
          <a href="https://forms.gle/vTXNzRfdvHVNY47C9" target="_blank" rel="noopener noreferrer">
            <button className="group px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center">
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          <button className="px-8 py-3 bg-transparent text-blue-400 rounded-full font-semibold border border-blue-400 hover:bg-blue-400/10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float-delayed" />
      </div>
    </section>
  );
}

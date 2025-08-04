import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg';

export const CyberHero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "> Initializing digital consciousness...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="terminal mb-8 p-6 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-matrix-green"></div>
              <span className="ml-4 text-muted-foreground text-sm">hacker@matrix:~$</span>
            </div>
            <div className="font-mono text-matrix-green">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                ▋
              </span>
            </div>
          </div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 glitch matrix-text"
            data-text="CYBER.DEV"
          >
            CYBER.DEV
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 neon-text font-mono"
          >
            Full-Stack Developer | Digital Architect | Code Wizard
          </motion.p>

          {/* Bio Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="terminal p-6 text-left max-w-3xl mx-auto mb-8"
          >
            <div className="font-mono text-sm space-y-2">
              <div className="text-matrix-green">$ whoami</div>
              <div className="text-foreground pl-4">
                Passionate developer crafting digital experiences in the cyberpunk realm.
                <br />
                Specializing in React, Node.js, Python, and emerging web technologies.
                <br />
                Currently hacking the matrix of modern web development.
              </div>
              <div className="text-matrix-green mt-4">$ cat skills.txt</div>
              <div className="text-foreground pl-4">
                Frontend: React, TypeScript, Three.js, Next.js
                <br />
                Backend: Node.js, Python, PostgreSQL, MongoDB
                <br />
                Tools: Docker, AWS, Git, Linux
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-cyber">
              VIEW PROJECTS
            </button>
            <button className="btn-cyber">
              CONTACT ME
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-matrix-green opacity-20 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {['01001001', '11010110', '10101010', '01110011'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
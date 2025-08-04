import { Scene3D } from '@/components/3D/Scene3D';
import { CyberHero } from '@/components/Hero/CyberHero';
import { ProjectsSection } from '@/components/Projects/ProjectsSection';
import { SkillsMatrix } from '@/components/Skills/SkillsMatrix';
import { ContactTerminal } from '@/components/Contact/ContactTerminal';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="terminal p-4 backdrop-blur-md bg-background/80">
            <div className="flex items-center justify-between">
              <div className="font-mono font-bold text-matrix-green text-xl">
                CYBER.DEV
              </div>
              <div className="hidden md:flex items-center gap-6 font-mono text-sm">
                <a href="#home" className="text-foreground hover:text-matrix-green transition-colors">
                  HOME
                </a>
                <a href="#projects" className="text-foreground hover:text-matrix-green transition-colors">
                  PROJECTS
                </a>
                <a href="#skills" className="text-foreground hover:text-matrix-green transition-colors">
                  SKILLS
                </a>
                <a href="#contact" className="text-foreground hover:text-matrix-green transition-colors">
                  CONTACT
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse-glow"></div>
                <span className="text-xs font-mono text-matrix-green">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home">
          <CyberHero />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="skills">
          <SkillsMatrix />
        </section>
        
        <section id="contact">
          <ContactTerminal />
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-12 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="terminal p-6 text-center">
            <div className="font-mono text-sm space-y-2">
              <div className="text-matrix-green">$ echo "Thanks for visiting!"</div>
              <div className="text-muted-foreground">
                © {new Date().getFullYear()} CYBER.DEV. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                Built with React, Three.js, and cyberpunk aesthetics
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;

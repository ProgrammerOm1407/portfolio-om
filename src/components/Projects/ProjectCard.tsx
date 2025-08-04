import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  demoUrl, 
  githubUrl, 
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="terminal p-6 h-full group relative overflow-hidden"
    >
      {/* Glowing border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-matrix-green/0 via-matrix-green/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      <div className="relative z-10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse-glow"></div>
            <span className="text-xs text-muted-foreground font-mono">project.exe</span>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-matrix-green transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-neon-purple transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold matrix-text mb-3 font-mono">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-2">
          <div className="text-xs text-matrix-green font-mono">$ ls technologies/</div>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-matrix-green/10 text-matrix-green border border-matrix-green/30 rounded font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Command Line Style Links */}
        <div className="mt-4 pt-4 border-t border-matrix-green/20">
          <div className="font-mono text-xs space-y-1">
            {githubUrl && (
              <div className="text-muted-foreground">
                <span className="text-matrix-green">$</span> git clone{' '}
                <a 
                  href={githubUrl}
                  className="text-cyber-blue hover:text-cyber-bright transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title.toLowerCase().replace(/\s+/g, '-')}
                </a>
              </div>
            )}
            {demoUrl && (
              <div className="text-muted-foreground">
                <span className="text-matrix-green">$</span> curl{' '}
                <a 
                  href={demoUrl}
                  className="text-neon-purple hover:text-neon-bright transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo.live
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
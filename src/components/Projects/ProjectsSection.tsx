import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Neural Network Dashboard",
    description: "Real-time AI monitoring system with 3D data visualization and predictive analytics. Built with React, Three.js, and TensorFlow.js for immersive data exploration.",
    tech: ["React", "Three.js", "TypeScript", "TensorFlow.js", "WebGL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Blockchain Explorer",
    description: "Cyberpunk-themed cryptocurrency tracker with live price feeds, wallet analysis, and smart contract interaction capabilities.",
    tech: ["Next.js", "Web3.js", "GraphQL", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Matrix Chat Protocol",
    description: "End-to-end encrypted messaging platform with disappearing messages, file sharing, and terminal-style interface.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB", "WebRTC"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Cyber Security Scanner",
    description: "Automated vulnerability assessment tool with real-time threat detection and detailed security reports.",
    tech: ["Python", "FastAPI", "React", "Docker", "Redis"],
    githubUrl: "https://github.com"
  },
  {
    title: "Quantum Code Editor",
    description: "Next-generation code editor with AI-powered suggestions, collaborative editing, and integrated terminal.",
    tech: ["Electron", "Monaco Editor", "Node.js", "WebSockets"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Digital Twin IoT Platform",
    description: "Real-time IoT device monitoring with 3D visualizations, predictive maintenance, and automated alerts.",
    tech: ["React", "Three.js", "MQTT", "InfluxDB", "Grafana"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border border-matrix-green/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="terminal inline-block p-4 mb-6">
            <div className="font-mono text-matrix-green text-sm">
              $ cd /projects && ls -la
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold matrix-text mb-6 glitch font-mono" data-text="PROJECTS">
            PROJECTS
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Digital artifacts from the cyberpunk frontier. Each project represents a journey into 
            the matrix of modern web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View More Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="terminal inline-block p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="text-matrix-green">$ git log --oneline</div>
              <div className="text-muted-foreground">More projects available in my repositories...</div>
              <div className="text-matrix-green mt-4">$ curl -X GET https://github.com/username</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cyber mt-4"
            >
              VIEW ALL PROJECTS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};